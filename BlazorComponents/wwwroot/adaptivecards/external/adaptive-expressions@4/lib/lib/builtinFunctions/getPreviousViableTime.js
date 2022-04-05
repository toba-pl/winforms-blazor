"use strict";var __importDefault=this&&this.__importDefault||function(mod){return mod&&mod.__esModule?mod:{default:mod}};Object.defineProperty(exports,"__esModule",{value:!0});const expressionEvaluator_1=require(180),returnType_1=require(213),expressionType_1=require(192),functionUtils_1=require(196),functionUtils_internal_1=require(195),timeZoneConverter_1=require(214),dayjs_1=__importDefault(require(400)),timezone_1=__importDefault(require(402));dayjs_1.default.extend(timezone_1.default);const recognizers_text_data_types_timex_expression_1=require(222);class GetPreviousViableTime extends expressionEvaluator_1.ExpressionEvaluator{constructor(){super(expressionType_1.ExpressionType.GetPreviousViableTime,GetPreviousViableTime.evaluator,returnType_1.ReturnType.String,functionUtils_1.FunctionUtils.validateUnaryOrBinaryString)}static evaluator(expr,state,options){let parsed;const currentTime=dayjs_1.default((new Date).toISOString());let convertedDateTime,validHour=0,validMinute=0,validSecond=0;const formatRegex=/TXX:[0-5][0-9]:[0-5][0-9]/g,{args:args,error:childrenError}=functionUtils_1.FunctionUtils.evaluateChildren(expr,state,options);let error=childrenError;if(error||formatRegex.test(args[0])||(error=`${args[0]}  must be a timex string which only contains minutes and seconds, for example: 'TXX:15:28'`),!error)if(2===args.length&&"string"==typeof args[1]){const timeZone=timeZoneConverter_1.TimeZoneConverter.windowsToIana(args[1]);timeZoneConverter_1.TimeZoneConverter.verifyTimeZoneStr(timeZone)||(error=`${args[1]} is not a valid timezone`),error||(convertedDateTime=currentTime.utc().tz(timeZone))}else convertedDateTime=currentTime.utc();if(error||({timexProperty:parsed,error:error}=functionUtils_internal_1.InternalFunctionUtils.parseTimexProperty(args[0].replace("XX","00"))),!error){const hour=convertedDateTime.hour(),minute=convertedDateTime.minute(),second=convertedDateTime.second();(validHour=parsed.minute<minute||parsed.minute===minute&&parsed.second<second?hour:hour-1)<0&&(validHour+=24),validMinute=parsed.minute,validSecond=parsed.second}return{value:recognizers_text_data_types_timex_expression_1.TimexProperty.fromTime(new recognizers_text_data_types_timex_expression_1.Time(validHour,validMinute,validSecond)).timex,error:error}}}exports.GetPreviousViableTime=GetPreviousViableTime;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdldFByZXZpb3VzVmlhYmxlVGltZS5qcyJdLCJuYW1lcyI6WyJfX2ltcG9ydERlZmF1bHQiLCJ0aGlzIiwibW9kIiwiX19lc01vZHVsZSIsImRlZmF1bHQiLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImV4cG9ydHMiLCJ2YWx1ZSIsImV4cHJlc3Npb25FdmFsdWF0b3JfMSIsInJlcXVpcmUiLCJyZXR1cm5UeXBlXzEiLCJleHByZXNzaW9uVHlwZV8xIiwiZnVuY3Rpb25VdGlsc18xIiwiZnVuY3Rpb25VdGlsc19pbnRlcm5hbF8xIiwidGltZVpvbmVDb252ZXJ0ZXJfMSIsImRheWpzXzEiLCJ0aW1lem9uZV8xIiwiZXh0ZW5kIiwicmVjb2duaXplcnNfdGV4dF9kYXRhX3R5cGVzX3RpbWV4X2V4cHJlc3Npb25fMSIsIkdldFByZXZpb3VzVmlhYmxlVGltZSIsIkV4cHJlc3Npb25FdmFsdWF0b3IiLCJbb2JqZWN0IE9iamVjdF0iLCJzdXBlciIsIkV4cHJlc3Npb25UeXBlIiwiZXZhbHVhdG9yIiwiUmV0dXJuVHlwZSIsIlN0cmluZyIsIkZ1bmN0aW9uVXRpbHMiLCJ2YWxpZGF0ZVVuYXJ5T3JCaW5hcnlTdHJpbmciLCJleHByIiwic3RhdGUiLCJvcHRpb25zIiwicGFyc2VkIiwiY3VycmVudFRpbWUiLCJEYXRlIiwidG9JU09TdHJpbmciLCJjb252ZXJ0ZWREYXRlVGltZSIsInZhbGlkSG91ciIsInZhbGlkTWludXRlIiwidmFsaWRTZWNvbmQiLCJmb3JtYXRSZWdleCIsImFyZ3MiLCJlcnJvciIsImNoaWxkcmVuRXJyb3IiLCJldmFsdWF0ZUNoaWxkcmVuIiwidGVzdCIsImxlbmd0aCIsInRpbWVab25lIiwiVGltZVpvbmVDb252ZXJ0ZXIiLCJ3aW5kb3dzVG9JYW5hIiwidmVyaWZ5VGltZVpvbmVTdHIiLCJ1dGMiLCJ0eiIsInRpbWV4UHJvcGVydHkiLCJJbnRlcm5hbEZ1bmN0aW9uVXRpbHMiLCJwYXJzZVRpbWV4UHJvcGVydHkiLCJyZXBsYWNlIiwiaG91ciIsIm1pbnV0ZSIsInNlY29uZCIsIlRpbWV4UHJvcGVydHkiLCJmcm9tVGltZSIsIlRpbWUiLCJ0aW1leCJdLCJtYXBwaW5ncyI6IkFBQUEsYUFRQSxJQUFJQSxnQkFBbUJDLE1BQVFBLEtBQUtELGlCQUFvQixTQUFVRSxLQUM5RCxPQUFRQSxLQUFPQSxJQUFJQyxXQUFjRCxJQUFNLENBQUVFLFFBQVdGLE1BRXhERyxPQUFPQyxlQUFlQyxRQUFTLGFBQWMsQ0FBRUMsT0FBTyxJQUN0RCxNQUFNQyxzQkFBd0JDLFFBQVEsMEJBQ2hDQyxhQUFlRCxRQUFRLGlCQUN2QkUsaUJBQW1CRixRQUFRLHFCQUMzQkcsZ0JBQWtCSCxRQUFRLG9CQUMxQkkseUJBQTJCSixRQUFRLDZCQUNuQ0ssb0JBQXNCTCxRQUFRLHdCQUM5Qk0sUUFBVWhCLGdCQUFnQlUsUUFBUSxVQUNsQ08sV0FBYWpCLGdCQUFnQlUsUUFBUSwwQkFDM0NNLFFBQVFaLFFBQVFjLE9BQU9ELFdBQVdiLFNBQ2xDLE1BQU1lLCtDQUFpRFQsUUFBUSwyREFJL0QsTUFBTVUsOEJBQThCWCxzQkFBc0JZLG9CQUl0REMsY0FDSUMsTUFBTVgsaUJBQWlCWSxlQUFlSixzQkFBdUJBLHNCQUFzQkssVUFBV2QsYUFBYWUsV0FBV0MsT0FBUWQsZ0JBQWdCZSxjQUFjQyw2QkFLaEtQLGlCQUFpQlEsS0FBTUMsTUFBT0MsU0FDMUIsSUFBSUMsT0FDSixNQUFNQyxZQUFjbEIsUUFBUVosU0FBUSxJQUFJK0IsTUFBT0MsZUFDL0MsSUFHSUMsa0JBSEFDLFVBQVksRUFDWkMsWUFBYyxFQUNkQyxZQUFjLEVBRWxCLE1BQU1DLFlBQWMsOEJBQ2RDLEtBQUVBLEtBQU1DLE1BQU9DLGVBQWtCL0IsZ0JBQWdCZSxjQUFjaUIsaUJBQWlCZixLQUFNQyxNQUFPQyxTQUNuRyxJQUFJVyxNQUFRQyxjQU1aLEdBTEtELE9BQ0lGLFlBQVlLLEtBQUtKLEtBQUssTUFDdkJDLFNBQVdELEtBQUssaUdBR25CQyxNQUNELEdBQW9CLElBQWhCRCxLQUFLSyxRQUFtQyxpQkFBWkwsS0FBSyxHQUFpQixDQUNsRCxNQUFNTSxTQUFXakMsb0JBQW9Ca0Msa0JBQWtCQyxjQUFjUixLQUFLLElBQ3JFM0Isb0JBQW9Ca0Msa0JBQWtCRSxrQkFBa0JILFlBQ3pETCxTQUFXRCxLQUFLLDhCQUVmQyxRQUNETixrQkFBb0JILFlBQVlrQixNQUFNQyxHQUFHTCxnQkFJN0NYLGtCQUFvQkgsWUFBWWtCLE1BTXhDLEdBSEtULFNBQ0VXLGNBQWVyQixPQUFRVSxNQUFPQSxPQUFVN0IseUJBQXlCeUMsc0JBQXNCQyxtQkFBbUJkLEtBQUssR0FBR2UsUUFBUSxLQUFNLFNBRWxJZCxNQUFPLENBQ1IsTUFBTWUsS0FBT3JCLGtCQUFrQnFCLE9BQ3pCQyxPQUFTdEIsa0JBQWtCc0IsU0FDM0JDLE9BQVN2QixrQkFBa0J1QixVQUU3QnRCLFVBREFMLE9BQU8wQixPQUFTQSxRQUFXMUIsT0FBTzBCLFNBQVdBLFFBQVUxQixPQUFPMkIsT0FBU0EsT0FDM0RGLEtBR0FBLEtBQU8sR0FFUCxJQUNacEIsV0FBYSxJQUVqQkMsWUFBY04sT0FBTzBCLE9BQ3JCbkIsWUFBY1AsT0FBTzJCLE9BR3pCLE1BQU8sQ0FBRXBELE1BREtXLCtDQUErQzBDLGNBQWNDLFNBQVMsSUFBSTNDLCtDQUErQzRDLEtBQUt6QixVQUFXQyxZQUFhQyxjQUFjd0IsTUFDbEtyQixNQUFBQSxRQUd4QnBDLFFBQVFhLHNCQUF3QkEiLCJmaWxlIjoiL2hvbWUvdnN0cy93b3JrLzEvcy9saWJyYXJpZXMvYWRhcHRpdmUtZXhwcmVzc2lvbnMvbGliL2J1aWx0aW5GdW5jdGlvbnMvZ2V0UHJldmlvdXNWaWFibGVUaW1lLmpzIn0=