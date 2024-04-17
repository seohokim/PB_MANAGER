import { HttpException } from '@nestjs/common';

export const getPrismaFormattedError = (error) => {
	const errorCode = error.code;
	switch (errorCode) {
		case 'P1000':
			return new HttpException(
				{
					success: false,
					message: [
						'Correct Authentication Required',
						'Authentication failed against database server, the provided database credentials are not valid. Please make sure to provide valid database credentials for the database server.',
					],
				},
				511,
			);
		case 'P1001':
			return new HttpException(
				{
					success: false,
					message: [
						'Database Timeout',
						"Can't reach database server. Please make sure your database server is running.",
					],
				},
				504,
			);
		case 'P1002':
			return new HttpException(
				{
					success: false,
					message: [
						'Database Timeout',
						'The database server was reached but timed out. Please try again. Please make sure your database server is running.',
					],
				},
				504,
			);
		case 'P1003':
			return new HttpException(
				{
					success: false,
					message: [
						'Not Found',
						'Database name, file, or column does not exist.',
					],
				},
				404,
			);
		case 'P1008':
			return new HttpException(
				{
					success: false,
					message: ['Operations Timeout', 'Operations timed out.'],
				},
				504,
			);
		case 'P1009':
			return new HttpException(
				{
					success: false,
					message: [
						'Duplicated Database',
						'Database already exists on the database server.',
					],
				},
				500,
			);
		case 'P1010':
			return new HttpException(
				{
					success: false,
					message: [
						'Database User Error',
						'User was denied access on the database.',
					],
				},
				511,
			);
		case 'P1011':
			return new HttpException(
				{
					success: false,
					message: [
						'Security Implementation Error',
						'Error opening a TLS connection.',
					],
				},
				500,
			);
		case 'P1012':
			return new HttpException(
				{
					success: false,
					message: ['Update Error', 'Invalid version after update.'],
				},
				500,
			);
		case 'P1013':
			return new HttpException(
				{
					success: false,
					message: [
						'Database Error',
						'The provided database string is invalid.',
					],
				},
				500,
			);
		case 'P1014':
			return new HttpException(
				{
					success: false,
					message: ['Not Found', 'This model does not exist.'],
				},
				404,
			);
		case 'P1015':
			return new HttpException(
				{
					success: false,
					message: [
						'Feature Not Allowed',
						'Your schema is using features that are not supported for the version of the database.',
					],
				},
				405,
			);
		case 'P1016':
			return new HttpException(
				{
					success: false,
					message: [
						'Expect Correct Parameters',
						'Your raw query had an incorrect number of parameters.',
					],
				},
				416,
			);
		case 'P1017':
			return new HttpException(
				{
					success: false,
					message: [
						'Server Timeout',
						'Server has closed the connection.',
					],
				},
				408,
			);
		case 'P2000':
			return new HttpException(
				{
					success: false,
					message: [
						'Value Too Large',
						"The provided value for the column is too long for the column's type.",
					],
				},
				413,
			);
		case 'P2001':
			return new HttpException(
				{
					success: false,
					message: [
						'Not Found',
						'The record searched does not exist.',
					],
				},
				404,
			);
		case 'P2002':
			return new HttpException(
				{
					success: false,
					message: [
						'Save failed',
						`A record with the same ${error.meta.target} already exists.`,
					],
				},
				422,
			);
		case 'P2003':
			return new HttpException(
				{
					success: false,
					message: [
						'Bad Foreing Key',
						'Foreign key constraint failed.',
					],
				},
				500,
			);
		case 'P2004':
			return new HttpException(
				{
					success: false,
					message: [
						'Database Error',
						'A constraint failed on the database.',
					],
				},
				500,
			);
		case 'P2005':
			return new HttpException(
				{
					success: false,
					message: [
						'Bad Type',
						"The value stored in the database for the field is invalid for the field's type",
					],
				},
				400,
			);
		case 'P2006':
			return new HttpException(
				{
					success: false,
					message: [
						'Invalid Value',
						'The provided value for field is not valid',
					],
				},
				400,
			);
		case 'P2007':
			return new HttpException(
				{
					success: false,
					message: ['Data Validation Error', 'Data validation error'],
				},
				500,
			);
		case 'P2008':
			return new HttpException(
				{
					success: false,
					message: ['Bad Query', 'Failed to parse the query'],
				},
				400,
			);
		case 'P2009':
			return new HttpException(
				{
					success: false,
					message: ['Bad Query', 'Failed to validate the query'],
				},
				500,
			);
		case 'P2010':
			return new HttpException(
				{ success: false, message: ['Bad Query', 'Raw query failed.'] },
				400,
			);
		case 'P2011':
			return new HttpException(
				{
					success: false,
					message: [
						'Constraint Violation',
						'Null constraint violation.',
					],
				},
				400,
			);
		case 'P2012':
			return new HttpException(
				{
					success: false,
					message: ['Missing Value', 'Missing a required value.'],
				},
				400,
			);
		case 'P2013':
			return new HttpException(
				{
					success: false,
					message: [
						'Missing Argument',
						'Missing the required argument.',
					],
				},
				400,
			);
		case 'P2014':
			return new HttpException(
				{
					success: false,
					message: [
						'Bad Change',
						'The change you are trying to make would violate the required relation.',
					],
				},
				400,
			);
		case 'P2015':
			return new HttpException(
				{
					success: false,
					message: [
						'Record Not Found',
						'A related record could not be found.',
					],
				},
				404,
			);
		case 'P2016':
			return new HttpException(
				{
					success: false,
					message: [
						'Interpretation Error',
						'Query interpretation error.',
					],
				},
				500,
			);
		case 'P2017':
			return new HttpException(
				{
					success: false,
					message: [
						'Bad Change',
						'The records for the relation models are not connected.',
					],
				},
				400,
			);
		case 'P2018':
			return new HttpException(
				{
					success: false,
					message: [
						'Record Not Found',
						'The required connected records were not found.',
					],
				},
				404,
			);
		case 'P2019':
			return new HttpException(
				{ success: false, message: ['Input Error', 'Input error.'] },
				400,
			);
		case 'P2020':
			return new HttpException(
				{
					success: false,
					message: [
						'Value Out Of Range',
						'Value out of range for the type.',
					],
				},
				413,
			);
		case 'P2021':
			return new HttpException(
				{
					success: false,
					message: [
						'Table Not Found',
						'The table does not exist in the current database.',
					],
				},
				404,
			);
		case 'P2022':
			return new HttpException(
				{
					success: false,
					message: [
						'Column Not Found',
						'The column does not exist in the current database.',
					],
				},
				404,
			);
		case 'P2023':
			return new HttpException(
				{
					success: false,
					message: ['Inconsistent Data', 'Inconsistent column data.'],
				},
				400,
			);
		case 'P2024':
			return new HttpException(
				{
					success: false,
					message: [
						'Request Timeout',
						'Timed out fetching a new connection from the connection pool.',
					],
				},
				408,
			);
		case 'P2025':
			return new HttpException(
				{
					success: false,
					message: [
						'Record Not Found',
						'An operation failed because it depends on one or more records that were required but not found.',
					],
				},
				404,
			);
		case 'P2026':
			return new HttpException(
				{
					success: false,
					message: [
						'Feature Not Allowed',
						"The current database provider doesn't support a feature that the query used.",
					],
				},
				405,
			);
		case 'P2027':
			return new HttpException(
				{
					success: false,
					message: [
						'Error',
						'Multiple errors occurred on the database during query execution.',
					],
				},
				500,
			);
		case 'P2028':
			return new HttpException(
				{
					success: false,
					message: ['Transaction Error', 'Transaction API error.'],
				},
				400,
			);
		case 'P2030':
			return new HttpException(
				{
					success: false,
					message: [
						'Schema Error',
						'Cannot find a fulltext index to use for the search, try adding a @@fulltext([Fields...]) to your schema.',
					],
				},
				500,
			);
		case 'P2031':
			return new HttpException(
				{
					success: false,
					message: [
						'MongoDB Error',
						'Prisma needs to perform transactions, which requires your MongoDB server to be run as a replica set. See details: https://pris.ly/d/mongodb-replica-set',
					],
				},
				500,
			);
		case 'P2033':
			return new HttpException(
				{
					success: false,
					message: [
						'Bad Type',
						"A number used in the query does not fit into a 64 bit signed integer. Consider using BigInt as field type if you're trying to store large integers",
					],
				},
				400,
			);
		case 'P2034':
			return new HttpException(
				{
					success: false,
					message: [
						'Transaction Failed',
						'Transaction failed due to a write conflict or a deadlock. Please retry your transaction',
					],
				},
				500,
			);
		case 'P3000':
			return new HttpException(
				{
					success: false,
					message: ['Error', 'Failed to create database'],
				},
				500,
			);
		case 'P3001':
			return new HttpException(
				{
					success: false,
					message: [
						'Error',
						'Migration possible with destructive changes and possible data loss',
					],
				},
				500,
			);
		case 'P3002':
			return new HttpException(
				{
					success: false,
					message: [
						'Error',
						'The attempted migration was rolled back',
					],
				},
				500,
			);
		case 'P3003':
			return new HttpException(
				{
					success: false,
					message: [
						'Error',
						'The format of migrations changed, the saved migrations are no longer valid. To solve this problem, please follow the steps at: https://pris.ly/d/migrate',
					],
				},
				500,
			);
		case 'P3004':
			return new HttpException(
				{
					success: false,
					message: [
						'Error',
						'This database is a system database, it should not be altered with prisma migrate. Please connect to another database.',
					],
				},
				500,
			);
		case 'P3005':
			return new HttpException(
				{
					success: false,
					message: [
						'Error',
						'The database schema is not empty. Read more about how to baseline an existing production database: https://pris.ly/d/migrate-baseline',
					],
				},
				500,
			);
		case 'P3006':
			return new HttpException(
				{
					success: false,
					message: [
						'Migration Failed',
						'Migration failed to apply cleanly to the shadow database.',
					],
				},
				500,
			);
		case 'P3007':
			return new HttpException(
				{
					success: false,
					message: [
						'Error',
						'Some of the requested preview features are not yet allowed in migration engine. Please remove them from your data model before using migrations.',
					],
				},
				500,
			);
		case 'P3008':
			return new HttpException(
				{
					success: false,
					message: [
						'Error',
						'The migration is already recorded as applied in the database.',
					],
				},
				500,
			);
		case 'P3009':
			return new HttpException(
				{
					success: false,
					message: [
						'Error',
						'Migrate found failed migrations in the target database, new migrations will not be applied. Read more about how to resolve migration issues in a production database: https://pris.ly/d/migrate-resolve',
					],
				},
				500,
			);
		case 'P3010':
			return new HttpException(
				{
					success: false,
					message: [
						'Migration Failed',
						'The name of the migration is too long. It must not be longer than 200 characters',
					],
				},
				500,
			);
		case 'P3011':
			return new HttpException(
				{
					success: false,
					message: [
						'Error',
						'Migration cannot be rolled back because it was never applied to the database. Hint: did you pass in the whole migration name? (example: "20201207184859_initial_migration")',
					],
				},
				500,
			);
		case 'P3012':
			return new HttpException(
				{
					success: false,
					message: [
						'Error',
						'Migration cannot be rolled back because it is not in a failed state.',
					],
				},
				500,
			);
		case 'P3013':
			return new HttpException(
				{
					success: false,
					message: [
						'Error',
						'Datasource provider arrays are no longer supported in migrate. Please change your datasource to use a single provider. Read more at https://pris.ly/multi-provider-deprecation',
					],
				},
				500,
			);
		case 'P3014':
			return new HttpException(
				{
					success: false,
					message: [
						'Error',
						'Prisma Migrate could not create the shadow database. Please make sure the database user has permission to create databases. More info: https://pris.ly/d/migrate-shadow.',
					],
				},
				500,
			);
		case 'P3015':
			return new HttpException(
				{
					success: false,
					message: [
						'Missing File',
						'Could not find the migration file. Please delete the directory or restore the migration file.',
					],
				},
				500,
			);
		case 'P3016':
			return new HttpException(
				{
					success: false,
					message: [
						'Error',
						'The fallback method for database resets failed, meaning Migrate could not clean up the database entirely.',
					],
				},
				500,
			);
		case 'P3017':
			return new HttpException(
				{
					success: false,
					message: [
						'Missing Migration',
						'The migration could not be found. Please make sure that the migration exists, and that you included the whole name of the directory. (example: "20201207184859_initial_migration")',
					],
				},
				500,
			);
		case 'P3018':
			return new HttpException(
				{
					success: false,
					message: [
						'Error',
						'A migration failed to apply. New migrations can not be applied before the error is recovered from. Read more about how to resolve migration issues in a production database: https://pris.ly/d/migrate-resolve',
					],
				},
				500,
			);
		case 'P3019':
			return new HttpException(
				{
					success: false,
					message: [
						'Error',
						'The datasource provider specified in your schema does not match the one specified in the migration_lock.toml. Please remove your current migration directory and start a new migration history with prisma migrate dev. Read more: https://pris.ly/d/migrate-provider-switch',
					],
				},
				500,
			);
		case 'P3020':
			return new HttpException(
				{
					success: false,
					message: [
						'Error',
						'The automatic creation of shadow databases is disabled on Azure SQL. Please set up a shadow database using the shadowDatabaseUrl datasource attribute. Read the docs page for more details: https://pris.ly/d/migrate-shadow',
					],
				},
				500,
			);
		case 'P3021':
			return new HttpException(
				{
					success: false,
					message: [
						'Error',
						'Foreign keys cannot be created on this database. Learn more how to handle this: https://pris.ly/d/migrate-no-foreign-keys',
					],
				},
				500,
			);
		case 'P3022':
			return new HttpException(
				{
					success: false,
					message: [
						'Error',
						'Direct execution of DDL (Data Definition Language) SQL statements is disabled on this database. Please read more here about how to handle this: https://pris.ly/d/migrate-no-direct-ddl',
					],
				},
				500,
			);
		case 'P4000':
			return new HttpException(
				{
					success: false,
					message: [
						'Error',
						'Introspection operation failed to produce a schema file',
					],
				},
				500,
			);
		case 'P4001':
			return new HttpException(
				{
					success: false,
					message: ['Error', 'The introspected database was empty'],
				},
				500,
			);
		case 'P4002':
			return new HttpException(
				{
					success: false,
					message: [
						'Error',
						'The schema of the introspected database was inconsistent',
					],
				},
				500,
			);
		default:
			return new HttpException(
				{ success: false, message: ['Internal Server Error'] },
				500,
			);
	}
};
