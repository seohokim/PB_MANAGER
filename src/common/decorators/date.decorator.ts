import { registerDecorator, ValidationOptions } from 'class-validator';

export function IsDateDDMMYYYY(validationOptions?: ValidationOptions) {
	return function (object: unknown, propertyName: string) {
		registerDecorator({
			name: 'isDateDDMMYYYY',
			target: (object as Record<string, any>).constructor,
			propertyName: propertyName,
			constraints: [],
			options: validationOptions,
			validator: {
				validate(value: string) {
					const dateRegex = /^(\d{2})-(\d{2})-(\d{4})$/;
					const match = value.match(dateRegex);
					if (!match) return false;

					const [_, day, month, year] = match;
					const date = new Date(`${year}-${month}-${day}`);

					return (
						date.getFullYear() === parseInt(year, 10) &&
						date.getMonth() === parseInt(month, 10) - 1 &&
						date.getDate() === parseInt(day, 10)
					);
				},
				defaultMessage() {
					return 'Date must be in DD-MM-YYYY format and valid';
				},
			},
		});
	};
}
