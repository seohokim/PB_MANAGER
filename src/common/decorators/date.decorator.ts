import { registerDecorator, ValidationOptions } from 'class-validator';

export function IsDateDDMMYYYY(validationOptions?: ValidationOptions) {
	return function (object: unknown, propertyName: string) {
		registerDecorator({
			name: 'isDateDDMMYYYY',
			target: object.constructor,
			propertyName: propertyName,
			constraints: [],
			options: validationOptions,
			validator: {
				validate(value: string) {
					const dateRegex = /^(\d{2})-(\d{2})-(\d{4})$/;
					if (!dateRegex.test(value)) return false;

					const [_, day, month, year] = value.match(dateRegex);
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
