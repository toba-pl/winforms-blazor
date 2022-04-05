"use strict";Object.defineProperty(exports,"__esModule",{value:!0});const expressionEvaluator_1=require(180),expressionType_1=require(192),functionUtils_1=require(196),functionUtils_internal_1=require(195),returnType_1=require(213);class Year extends expressionEvaluator_1.ExpressionEvaluator{constructor(){super(expressionType_1.ExpressionType.Year,Year.evaluator(),returnType_1.ReturnType.Number,functionUtils_1.FunctionUtils.validateUnaryString)}static evaluator(){return functionUtils_1.FunctionUtils.applyWithError(args=>{const error=functionUtils_internal_1.InternalFunctionUtils.verifyISOTimestamp(args[0]);return error?{value:void 0,error:error}:{value:new Date(args[0]).getUTCFullYear(),error:error}},functionUtils_1.FunctionUtils.verifyString)}}exports.Year=Year;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInllYXIuanMiXSwibmFtZXMiOlsiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJleHBvcnRzIiwidmFsdWUiLCJleHByZXNzaW9uRXZhbHVhdG9yXzEiLCJyZXF1aXJlIiwiZXhwcmVzc2lvblR5cGVfMSIsImZ1bmN0aW9uVXRpbHNfMSIsImZ1bmN0aW9uVXRpbHNfaW50ZXJuYWxfMSIsInJldHVyblR5cGVfMSIsIlllYXIiLCJFeHByZXNzaW9uRXZhbHVhdG9yIiwiW29iamVjdCBPYmplY3RdIiwic3VwZXIiLCJFeHByZXNzaW9uVHlwZSIsImV2YWx1YXRvciIsIlJldHVyblR5cGUiLCJOdW1iZXIiLCJGdW5jdGlvblV0aWxzIiwidmFsaWRhdGVVbmFyeVN0cmluZyIsImFwcGx5V2l0aEVycm9yIiwiYXJncyIsImVycm9yIiwiSW50ZXJuYWxGdW5jdGlvblV0aWxzIiwidmVyaWZ5SVNPVGltZXN0YW1wIiwidW5kZWZpbmVkIiwiRGF0ZSIsImdldFVUQ0Z1bGxZZWFyIiwidmVyaWZ5U3RyaW5nIl0sIm1hcHBpbmdzIjoiQUFBQSxhQVFBQSxPQUFPQyxlQUFlQyxRQUFTLGFBQWMsQ0FBRUMsT0FBTyxJQUN0RCxNQUFNQyxzQkFBd0JDLFFBQVEsMEJBQ2hDQyxpQkFBbUJELFFBQVEscUJBQzNCRSxnQkFBa0JGLFFBQVEsb0JBQzFCRyx5QkFBMkJILFFBQVEsNkJBQ25DSSxhQUFlSixRQUFRLGlCQUk3QixNQUFNSyxhQUFhTixzQkFBc0JPLG9CQUlyQ0MsY0FDSUMsTUFBTVAsaUJBQWlCUSxlQUFlSixLQUFNQSxLQUFLSyxZQUFhTixhQUFhTyxXQUFXQyxPQUFRVixnQkFBZ0JXLGNBQWNDLHFCQUtoSVAsbUJBQ0ksT0FBT0wsZ0JBQWdCVyxjQUFjRSxlQUFnQkMsT0FDakQsTUFBTUMsTUFBUWQseUJBQXlCZSxzQkFBc0JDLG1CQUFtQkgsS0FBSyxJQUNyRixPQUFLQyxNQUdFLENBQUVuQixXQUFPc0IsRUFBV0gsTUFBQUEsT0FGaEIsQ0FBRW5CLE1BQU8sSUFBSXVCLEtBQUtMLEtBQUssSUFBSU0saUJBQWtCTCxNQUFBQSxRQUd6RGYsZ0JBQWdCVyxjQUFjVSxlQUd6QzFCLFFBQVFRLEtBQU9BIiwiZmlsZSI6Ii9ob21lL3ZzdHMvd29yay8xL3MvbGlicmFyaWVzL2FkYXB0aXZlLWV4cHJlc3Npb25zL2xpYi9idWlsdGluRnVuY3Rpb25zL3llYXIuanMifQ==