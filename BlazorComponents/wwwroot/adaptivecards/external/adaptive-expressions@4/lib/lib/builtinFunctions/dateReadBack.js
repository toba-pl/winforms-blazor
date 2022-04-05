"use strict";var __importDefault=this&&this.__importDefault||function(mod){return mod&&mod.__esModule?mod:{default:mod}};Object.defineProperty(exports,"__esModule",{value:!0});const recognizers_text_data_types_timex_expression_1=require(222),dayjs_1=__importDefault(require(400)),expressionEvaluator_1=require(180),expressionType_1=require(192),functionUtils_1=require(196),functionUtils_internal_1=require(195),returnType_1=require(213);class DateReadBack extends expressionEvaluator_1.ExpressionEvaluator{constructor(){super(expressionType_1.ExpressionType.DateReadBack,DateReadBack.evaluator(),returnType_1.ReturnType.String,DateReadBack.validator)}static evaluator(){return functionUtils_1.FunctionUtils.applyWithError(args=>{let error=functionUtils_internal_1.InternalFunctionUtils.verifyISOTimestamp(args[0]);if(!error){const timestamp1=dayjs_1.default(args[0]).toDate();if(!(error=functionUtils_internal_1.InternalFunctionUtils.verifyISOTimestamp(args[1]))){const timestamp2=dayjs_1.default(args[1]).format("YYYY-MM-DD");return{value:new recognizers_text_data_types_timex_expression_1.TimexProperty(timestamp2).toNaturalLanguage(timestamp1),error:error}}}return{value:void 0,error:error}},functionUtils_1.FunctionUtils.verifyString)}static validator(expression){functionUtils_1.FunctionUtils.validateOrder(expression,void 0,returnType_1.ReturnType.String,returnType_1.ReturnType.String)}}exports.DateReadBack=DateReadBack;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhdGVSZWFkQmFjay5qcyJdLCJuYW1lcyI6WyJfX2ltcG9ydERlZmF1bHQiLCJ0aGlzIiwibW9kIiwiX19lc01vZHVsZSIsImRlZmF1bHQiLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImV4cG9ydHMiLCJ2YWx1ZSIsInJlY29nbml6ZXJzX3RleHRfZGF0YV90eXBlc190aW1leF9leHByZXNzaW9uXzEiLCJyZXF1aXJlIiwiZGF5anNfMSIsImV4cHJlc3Npb25FdmFsdWF0b3JfMSIsImV4cHJlc3Npb25UeXBlXzEiLCJmdW5jdGlvblV0aWxzXzEiLCJmdW5jdGlvblV0aWxzX2ludGVybmFsXzEiLCJyZXR1cm5UeXBlXzEiLCJEYXRlUmVhZEJhY2siLCJFeHByZXNzaW9uRXZhbHVhdG9yIiwiW29iamVjdCBPYmplY3RdIiwic3VwZXIiLCJFeHByZXNzaW9uVHlwZSIsImV2YWx1YXRvciIsIlJldHVyblR5cGUiLCJTdHJpbmciLCJ2YWxpZGF0b3IiLCJGdW5jdGlvblV0aWxzIiwiYXBwbHlXaXRoRXJyb3IiLCJhcmdzIiwiZXJyb3IiLCJJbnRlcm5hbEZ1bmN0aW9uVXRpbHMiLCJ2ZXJpZnlJU09UaW1lc3RhbXAiLCJ0aW1lc3RhbXAxIiwidG9EYXRlIiwidGltZXN0YW1wMiIsImZvcm1hdCIsIlRpbWV4UHJvcGVydHkiLCJ0b05hdHVyYWxMYW5ndWFnZSIsInVuZGVmaW5lZCIsInZlcmlmeVN0cmluZyIsImV4cHJlc3Npb24iLCJ2YWxpZGF0ZU9yZGVyIl0sIm1hcHBpbmdzIjoiQUFBQSxhQVFBLElBQUlBLGdCQUFtQkMsTUFBUUEsS0FBS0QsaUJBQW9CLFNBQVVFLEtBQzlELE9BQVFBLEtBQU9BLElBQUlDLFdBQWNELElBQU0sQ0FBRUUsUUFBV0YsTUFFeERHLE9BQU9DLGVBQWVDLFFBQVMsYUFBYyxDQUFFQyxPQUFPLElBQ3RELE1BQU1DLCtDQUFpREMsUUFBUSwyREFDekRDLFFBQVVYLGdCQUFnQlUsUUFBUSxVQUNsQ0Usc0JBQXdCRixRQUFRLDBCQUNoQ0csaUJBQW1CSCxRQUFRLHFCQUMzQkksZ0JBQWtCSixRQUFRLG9CQUMxQksseUJBQTJCTCxRQUFRLDZCQUNuQ00sYUFBZU4sUUFBUSxpQkFJN0IsTUFBTU8scUJBQXFCTCxzQkFBc0JNLG9CQUk3Q0MsY0FDSUMsTUFBTVAsaUJBQWlCUSxlQUFlSixhQUFjQSxhQUFhSyxZQUFhTixhQUFhTyxXQUFXQyxPQUFRUCxhQUFhUSxXQUsvSE4sbUJBQ0ksT0FBT0wsZ0JBQWdCWSxjQUFjQyxlQUFnQkMsT0FFakQsSUFBSUMsTUFBUWQseUJBQXlCZSxzQkFBc0JDLG1CQUFtQkgsS0FBSyxJQUNuRixJQUFLQyxNQUFPLENBQ1IsTUFBTUcsV0FBYXJCLFFBQVFQLFFBQVF3QixLQUFLLElBQUlLLFNBRTVDLEtBREFKLE1BQVFkLHlCQUF5QmUsc0JBQXNCQyxtQkFBbUJILEtBQUssS0FDbkUsQ0FDUixNQUFNTSxXQUFhdkIsUUFBUVAsUUFBUXdCLEtBQUssSUFBSU8sT0FOakMsY0FRWCxNQUFPLENBQUUzQixNQURLLElBQUlDLCtDQUErQzJCLGNBQWNGLFlBQ3pERyxrQkFBa0JMLFlBQWFILE1BQUFBLFFBRzdELE1BQU8sQ0FBRXJCLFdBQU84QixFQUFXVCxNQUFBQSxRQUM1QmYsZ0JBQWdCWSxjQUFjYSxjQUtyQ3BCLGlCQUFpQnFCLFlBQ2IxQixnQkFBZ0JZLGNBQWNlLGNBQWNELGdCQUFZRixFQUFXdEIsYUFBYU8sV0FBV0MsT0FBUVIsYUFBYU8sV0FBV0MsU0FHbklqQixRQUFRVSxhQUFlQSIsImZpbGUiOiIvaG9tZS92c3RzL3dvcmsvMS9zL2xpYnJhcmllcy9hZGFwdGl2ZS1leHByZXNzaW9ucy9saWIvYnVpbHRpbkZ1bmN0aW9ucy9kYXRlUmVhZEJhY2suanMifQ==