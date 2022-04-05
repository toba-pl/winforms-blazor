"use strict";var __importDefault=this&&this.__importDefault||function(mod){return mod&&mod.__esModule?mod:{default:mod}};Object.defineProperty(exports,"__esModule",{value:!0});const dayjs_1=__importDefault(require(400)),utc_1=__importDefault(require(403));dayjs_1.default.extend(utc_1.default);const expressionEvaluator_1=require(180),expressionType_1=require(192),functionUtils_1=require(196),functionUtils_internal_1=require(195),returnType_1=require(213);class StartOfDay extends expressionEvaluator_1.ExpressionEvaluator{constructor(){super(expressionType_1.ExpressionType.StartOfDay,StartOfDay.evaluator,returnType_1.ReturnType.String,StartOfDay.validator)}static evaluator(expression,state,options){let value,locale=options.locale?options.locale:Intl.DateTimeFormat().resolvedOptions().locale,format=functionUtils_1.FunctionUtils.DefaultDateTimeFormat;const{args:args,error:childrenError}=functionUtils_1.FunctionUtils.evaluateChildren(expression,state,options);let error=childrenError;return error||(({format:format,locale:locale}=functionUtils_1.FunctionUtils.determineFormatAndLocale(args,3,format,locale)),"string"==typeof args[0]?({value:value,error:error}=StartOfDay.evalStartOfDay(args[0],format,locale)):error=`${expression} should contain an ISO format timestamp and an optional output format string.`),{value:value,error:error}}static evalStartOfDay(timeStamp,format,locale){let result;const error=functionUtils_internal_1.InternalFunctionUtils.verifyISOTimestamp(timeStamp);return error||(result=dayjs_1.default(timeStamp).locale(locale).utc().startOf("day").format(format)),{value:result,error:error}}static validator(expression){functionUtils_1.FunctionUtils.validateOrder(expression,[returnType_1.ReturnType.String,returnType_1.ReturnType.String],returnType_1.ReturnType.String)}}exports.StartOfDay=StartOfDay;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0YXJ0T2ZEYXkuanMiXSwibmFtZXMiOlsiX19pbXBvcnREZWZhdWx0IiwidGhpcyIsIm1vZCIsIl9fZXNNb2R1bGUiLCJkZWZhdWx0IiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJleHBvcnRzIiwidmFsdWUiLCJkYXlqc18xIiwicmVxdWlyZSIsInV0Y18xIiwiZXh0ZW5kIiwiZXhwcmVzc2lvbkV2YWx1YXRvcl8xIiwiZXhwcmVzc2lvblR5cGVfMSIsImZ1bmN0aW9uVXRpbHNfMSIsImZ1bmN0aW9uVXRpbHNfaW50ZXJuYWxfMSIsInJldHVyblR5cGVfMSIsIlN0YXJ0T2ZEYXkiLCJFeHByZXNzaW9uRXZhbHVhdG9yIiwiW29iamVjdCBPYmplY3RdIiwic3VwZXIiLCJFeHByZXNzaW9uVHlwZSIsImV2YWx1YXRvciIsIlJldHVyblR5cGUiLCJTdHJpbmciLCJ2YWxpZGF0b3IiLCJleHByZXNzaW9uIiwic3RhdGUiLCJvcHRpb25zIiwibG9jYWxlIiwiSW50bCIsIkRhdGVUaW1lRm9ybWF0IiwicmVzb2x2ZWRPcHRpb25zIiwiZm9ybWF0IiwiRnVuY3Rpb25VdGlscyIsIkRlZmF1bHREYXRlVGltZUZvcm1hdCIsImFyZ3MiLCJlcnJvciIsImNoaWxkcmVuRXJyb3IiLCJldmFsdWF0ZUNoaWxkcmVuIiwiZGV0ZXJtaW5lRm9ybWF0QW5kTG9jYWxlIiwiZXZhbFN0YXJ0T2ZEYXkiLCJ0aW1lU3RhbXAiLCJyZXN1bHQiLCJJbnRlcm5hbEZ1bmN0aW9uVXRpbHMiLCJ2ZXJpZnlJU09UaW1lc3RhbXAiLCJ1dGMiLCJzdGFydE9mIiwidmFsaWRhdGVPcmRlciJdLCJtYXBwaW5ncyI6IkFBQUEsYUFRQSxJQUFJQSxnQkFBbUJDLE1BQVFBLEtBQUtELGlCQUFvQixTQUFVRSxLQUM5RCxPQUFRQSxLQUFPQSxJQUFJQyxXQUFjRCxJQUFNLENBQUVFLFFBQVdGLE1BRXhERyxPQUFPQyxlQUFlQyxRQUFTLGFBQWMsQ0FBRUMsT0FBTyxJQUN0RCxNQUFNQyxRQUFVVCxnQkFBZ0JVLFFBQVEsVUFDbENDLE1BQVFYLGdCQUFnQlUsUUFBUSxxQkFDdENELFFBQVFMLFFBQVFRLE9BQU9ELE1BQU1QLFNBQzdCLE1BQU1TLHNCQUF3QkgsUUFBUSwwQkFDaENJLGlCQUFtQkosUUFBUSxxQkFDM0JLLGdCQUFrQkwsUUFBUSxvQkFDMUJNLHlCQUEyQk4sUUFBUSw2QkFDbkNPLGFBQWVQLFFBQVEsaUJBSTdCLE1BQU1RLG1CQUFtQkwsc0JBQXNCTSxvQkFJM0NDLGNBQ0lDLE1BQU1QLGlCQUFpQlEsZUFBZUosV0FBWUEsV0FBV0ssVUFBV04sYUFBYU8sV0FBV0MsT0FBUVAsV0FBV1EsV0FLdkhOLGlCQUFpQk8sV0FBWUMsTUFBT0MsU0FDaEMsSUFBSXJCLE1BQ0FzQixPQUFTRCxRQUFRQyxPQUFTRCxRQUFRQyxPQUFTQyxLQUFLQyxpQkFBaUJDLGtCQUFrQkgsT0FDbkZJLE9BQVNuQixnQkFBZ0JvQixjQUFjQyxzQkFDM0MsTUFBTUMsS0FBRUEsS0FBTUMsTUFBT0MsZUFBa0J4QixnQkFBZ0JvQixjQUFjSyxpQkFBaUJiLFdBQVlDLE1BQU9DLFNBQ3pHLElBQUlTLE1BQVFDLGNBVVosT0FUS0QsVUFDRUosT0FBQUEsT0FBUUosT0FBQUEsUUFBV2YsZ0JBQWdCb0IsY0FBY00seUJBQXlCSixLQUFNLEVBQUdILE9BQVFKLFNBQ3ZFLGlCQUFaTyxLQUFLLEtBQ1Q3QixNQUFBQSxNQUFPOEIsTUFBQUEsT0FBVXBCLFdBQVd3QixlQUFlTCxLQUFLLEdBQUlILE9BQVFKLFNBRy9EUSxTQUFXWCwyRkFHWixDQUFFbkIsTUFBQUEsTUFBTzhCLE1BQUFBLE9BS3BCbEIsc0JBQXNCdUIsVUFBV1QsT0FBUUosUUFDckMsSUFBSWMsT0FDSixNQUFNTixNQUFRdEIseUJBQXlCNkIsc0JBQXNCQyxtQkFBbUJILFdBSWhGLE9BSEtMLFFBQ0RNLE9BQVNuQyxRQUFRTCxRQUFRdUMsV0FBV2IsT0FBT0EsUUFBUWlCLE1BQU1DLFFBQVEsT0FBT2QsT0FBT0EsU0FFNUUsQ0FBRTFCLE1BQU9vQyxPQUFRTixNQUFBQSxPQUs1QmxCLGlCQUFpQk8sWUFDYlosZ0JBQWdCb0IsY0FBY2MsY0FBY3RCLFdBQVksQ0FBQ1YsYUFBYU8sV0FBV0MsT0FBUVIsYUFBYU8sV0FBV0MsUUFBU1IsYUFBYU8sV0FBV0MsU0FHMUpsQixRQUFRVyxXQUFhQSIsImZpbGUiOiIvaG9tZS92c3RzL3dvcmsvMS9zL2xpYnJhcmllcy9hZGFwdGl2ZS1leHByZXNzaW9ucy9saWIvYnVpbHRpbkZ1bmN0aW9ucy9zdGFydE9mRGF5LmpzIn0=