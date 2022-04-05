"use strict";Object.defineProperty(exports,"__esModule",{value:!0});const expressionEvaluator_1=require(180),expressionType_1=require(192),functionUtils_1=require(196),functionUtils_internal_1=require(195),returnType_1=require(213);class SortByDescending extends expressionEvaluator_1.ExpressionEvaluator{constructor(){super(expressionType_1.ExpressionType.SortByDescending,functionUtils_internal_1.InternalFunctionUtils.sortBy(!0),returnType_1.ReturnType.Array,SortByDescending.validator)}static validator(expression){functionUtils_1.FunctionUtils.validateOrder(expression,[returnType_1.ReturnType.String],returnType_1.ReturnType.Array)}}exports.SortByDescending=SortByDescending;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNvcnRCeURlc2NlbmRpbmcuanMiXSwibmFtZXMiOlsiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJleHBvcnRzIiwidmFsdWUiLCJleHByZXNzaW9uRXZhbHVhdG9yXzEiLCJyZXF1aXJlIiwiZXhwcmVzc2lvblR5cGVfMSIsImZ1bmN0aW9uVXRpbHNfMSIsImZ1bmN0aW9uVXRpbHNfaW50ZXJuYWxfMSIsInJldHVyblR5cGVfMSIsIlNvcnRCeURlc2NlbmRpbmciLCJFeHByZXNzaW9uRXZhbHVhdG9yIiwiW29iamVjdCBPYmplY3RdIiwic3VwZXIiLCJFeHByZXNzaW9uVHlwZSIsIkludGVybmFsRnVuY3Rpb25VdGlscyIsInNvcnRCeSIsIlJldHVyblR5cGUiLCJBcnJheSIsInZhbGlkYXRvciIsImV4cHJlc3Npb24iLCJGdW5jdGlvblV0aWxzIiwidmFsaWRhdGVPcmRlciIsIlN0cmluZyJdLCJtYXBwaW5ncyI6IkFBQUEsYUFRQUEsT0FBT0MsZUFBZUMsUUFBUyxhQUFjLENBQUVDLE9BQU8sSUFDdEQsTUFBTUMsc0JBQXdCQyxRQUFRLDBCQUNoQ0MsaUJBQW1CRCxRQUFRLHFCQUMzQkUsZ0JBQWtCRixRQUFRLG9CQUMxQkcseUJBQTJCSCxRQUFRLDZCQUNuQ0ksYUFBZUosUUFBUSxpQkFJN0IsTUFBTUsseUJBQXlCTixzQkFBc0JPLG9CQUlqREMsY0FDSUMsTUFBTVAsaUJBQWlCUSxlQUFlSixpQkFBa0JGLHlCQUF5Qk8sc0JBQXNCQyxRQUFPLEdBQU9QLGFBQWFRLFdBQVdDLE1BQU9SLGlCQUFpQlMsV0FLektQLGlCQUFpQlEsWUFDYmIsZ0JBQWdCYyxjQUFjQyxjQUFjRixXQUFZLENBQUNYLGFBQWFRLFdBQVdNLFFBQVNkLGFBQWFRLFdBQVdDLFFBRzFIaEIsUUFBUVEsaUJBQW1CQSIsImZpbGUiOiIvaG9tZS92c3RzL3dvcmsvMS9zL2xpYnJhcmllcy9hZGFwdGl2ZS1leHByZXNzaW9ucy9saWIvYnVpbHRpbkZ1bmN0aW9ucy9zb3J0QnlEZXNjZW5kaW5nLmpzIn0=