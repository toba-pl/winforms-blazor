"use strict";var __importDefault=this&&this.__importDefault||function(mod){return mod&&mod.__esModule?mod:{default:mod}};Object.defineProperty(exports,"__esModule",{value:!0});const expressionEvaluator_1=require(180),expressionType_1=require(192),functionUtils_1=require(196),returnType_1=require(213),atob_lite_1=__importDefault(require(395));class Base64ToString extends expressionEvaluator_1.ExpressionEvaluator{constructor(){super(expressionType_1.ExpressionType.Base64ToString,Base64ToString.evaluator(),returnType_1.ReturnType.String,functionUtils_1.FunctionUtils.validateUnary)}static evaluator(){return functionUtils_1.FunctionUtils.apply(args=>atob_lite_1.default(args[0]),functionUtils_1.FunctionUtils.verifyString)}}exports.Base64ToString=Base64ToString;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJhc2U2NFRvU3RyaW5nLmpzIl0sIm5hbWVzIjpbIl9faW1wb3J0RGVmYXVsdCIsInRoaXMiLCJtb2QiLCJfX2VzTW9kdWxlIiwiZGVmYXVsdCIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZXhwb3J0cyIsInZhbHVlIiwiZXhwcmVzc2lvbkV2YWx1YXRvcl8xIiwicmVxdWlyZSIsImV4cHJlc3Npb25UeXBlXzEiLCJmdW5jdGlvblV0aWxzXzEiLCJyZXR1cm5UeXBlXzEiLCJhdG9iX2xpdGVfMSIsIkJhc2U2NFRvU3RyaW5nIiwiRXhwcmVzc2lvbkV2YWx1YXRvciIsIltvYmplY3QgT2JqZWN0XSIsInN1cGVyIiwiRXhwcmVzc2lvblR5cGUiLCJldmFsdWF0b3IiLCJSZXR1cm5UeXBlIiwiU3RyaW5nIiwiRnVuY3Rpb25VdGlscyIsInZhbGlkYXRlVW5hcnkiLCJhcHBseSIsImFyZ3MiLCJ2ZXJpZnlTdHJpbmciXSwibWFwcGluZ3MiOiJBQUFBLGFBUUEsSUFBSUEsZ0JBQW1CQyxNQUFRQSxLQUFLRCxpQkFBb0IsU0FBVUUsS0FDOUQsT0FBUUEsS0FBT0EsSUFBSUMsV0FBY0QsSUFBTSxDQUFFRSxRQUFXRixNQUV4REcsT0FBT0MsZUFBZUMsUUFBUyxhQUFjLENBQUVDLE9BQU8sSUFDdEQsTUFBTUMsc0JBQXdCQyxRQUFRLDBCQUNoQ0MsaUJBQW1CRCxRQUFRLHFCQUMzQkUsZ0JBQWtCRixRQUFRLG9CQUMxQkcsYUFBZUgsUUFBUSxpQkFDdkJJLFlBQWNkLGdCQUFnQlUsUUFBUSxjQUk1QyxNQUFNSyx1QkFBdUJOLHNCQUFzQk8sb0JBSS9DQyxjQUNJQyxNQUFNUCxpQkFBaUJRLGVBQWVKLGVBQWdCQSxlQUFlSyxZQUFhUCxhQUFhUSxXQUFXQyxPQUFRVixnQkFBZ0JXLGNBQWNDLGVBS3BKUCxtQkFDSSxPQUFPTCxnQkFBZ0JXLGNBQWNFLE1BQU9DLE1BQVNaLFlBQVlWLFFBQVFzQixLQUFLLElBQUtkLGdCQUFnQlcsY0FBY0ksZUFHekhwQixRQUFRUSxlQUFpQkEiLCJmaWxlIjoiL2hvbWUvdnN0cy93b3JrLzEvcy9saWJyYXJpZXMvYWRhcHRpdmUtZXhwcmVzc2lvbnMvbGliL2J1aWx0aW5GdW5jdGlvbnMvYmFzZTY0VG9TdHJpbmcuanMifQ==