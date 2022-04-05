"use strict";Object.defineProperty(exports,"__esModule",{value:!0});const expressionType_1=require(192),functionUtils_1=require(196),functionUtils_internal_1=require(195),stringTransformEvaluator_1=require(134);class ToUpper extends stringTransformEvaluator_1.StringTransformEvaluator{constructor(){super(expressionType_1.ExpressionType.ToUpper,ToUpper.evaluator,functionUtils_1.FunctionUtils.validateUnaryOrBinaryString)}static evaluator(args,options){let locale=options.locale?options.locale:Intl.DateTimeFormat().resolvedOptions().locale;locale=functionUtils_1.FunctionUtils.determineLocale(args,2,locale);const firstArg=args[0];if("string"==typeof firstArg||void 0===firstArg)return functionUtils_internal_1.InternalFunctionUtils.parseStringOrUndefined(firstArg).toLocaleUpperCase(locale)}}exports.ToUpper=ToUpper;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRvVXBwZXIuanMiXSwibmFtZXMiOlsiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJleHBvcnRzIiwidmFsdWUiLCJleHByZXNzaW9uVHlwZV8xIiwicmVxdWlyZSIsImZ1bmN0aW9uVXRpbHNfMSIsImZ1bmN0aW9uVXRpbHNfaW50ZXJuYWxfMSIsInN0cmluZ1RyYW5zZm9ybUV2YWx1YXRvcl8xIiwiVG9VcHBlciIsIlN0cmluZ1RyYW5zZm9ybUV2YWx1YXRvciIsIltvYmplY3QgT2JqZWN0XSIsInN1cGVyIiwiRXhwcmVzc2lvblR5cGUiLCJldmFsdWF0b3IiLCJGdW5jdGlvblV0aWxzIiwidmFsaWRhdGVVbmFyeU9yQmluYXJ5U3RyaW5nIiwiYXJncyIsIm9wdGlvbnMiLCJsb2NhbGUiLCJJbnRsIiwiRGF0ZVRpbWVGb3JtYXQiLCJyZXNvbHZlZE9wdGlvbnMiLCJkZXRlcm1pbmVMb2NhbGUiLCJmaXJzdEFyZyIsInVuZGVmaW5lZCIsIkludGVybmFsRnVuY3Rpb25VdGlscyIsInBhcnNlU3RyaW5nT3JVbmRlZmluZWQiLCJ0b0xvY2FsZVVwcGVyQ2FzZSJdLCJtYXBwaW5ncyI6IkFBQUEsYUFRQUEsT0FBT0MsZUFBZUMsUUFBUyxhQUFjLENBQUVDLE9BQU8sSUFDdEQsTUFBTUMsaUJBQW1CQyxRQUFRLHFCQUMzQkMsZ0JBQWtCRCxRQUFRLG9CQUMxQkUseUJBQTJCRixRQUFRLDZCQUNuQ0csMkJBQTZCSCxRQUFRLDhCQUszQyxNQUFNSSxnQkFBZ0JELDJCQUEyQkUseUJBSTdDQyxjQUNJQyxNQUFNUixpQkFBaUJTLGVBQWVKLFFBQVNBLFFBQVFLLFVBQVdSLGdCQUFnQlMsY0FBY0MsNkJBS3BHTCxpQkFBaUJNLEtBQU1DLFNBQ25CLElBQUlDLE9BQVNELFFBQVFDLE9BQVNELFFBQVFDLE9BQVNDLEtBQUtDLGlCQUFpQkMsa0JBQWtCSCxPQUN2RkEsT0FBU2IsZ0JBQWdCUyxjQUFjUSxnQkFBZ0JOLEtBQU0sRUFBR0UsUUFDaEUsTUFBTUssU0FBV1AsS0FBSyxHQUN0QixHQUF3QixpQkFBYk8sZUFBc0NDLElBQWJELFNBQ2hDLE9BQU9qQix5QkFBeUJtQixzQkFBc0JDLHVCQUF1QkgsVUFBVUksa0JBQWtCVCxTQUlySGpCLFFBQVFPLFFBQVVBIiwiZmlsZSI6Ii9ob21lL3ZzdHMvd29yay8xL3MvbGlicmFyaWVzL2FkYXB0aXZlLWV4cHJlc3Npb25zL2xpYi9idWlsdGluRnVuY3Rpb25zL3RvVXBwZXIuanMifQ==