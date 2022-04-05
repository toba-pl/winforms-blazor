"use strict";var __importDefault=this&&this.__importDefault||function(mod){return mod&&mod.__esModule?mod:{default:mod}};Object.defineProperty(exports,"__esModule",{value:!0});const expressionEvaluator_1=require(180),expressionType_1=require(192),functionUtils_1=require(196),returnType_1=require(213),btoa_lite_1=__importDefault(require(398));class DataUri extends expressionEvaluator_1.ExpressionEvaluator{constructor(){super(expressionType_1.ExpressionType.DataUri,DataUri.evaluator(),returnType_1.ReturnType.String,functionUtils_1.FunctionUtils.validateUnary)}static evaluator(){return functionUtils_1.FunctionUtils.apply(args=>"data:text/plain;charset=utf-8;base64,".concat(btoa_lite_1.default(args[0])),functionUtils_1.FunctionUtils.verifyString)}}exports.DataUri=DataUri;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhdGFVcmkuanMiXSwibmFtZXMiOlsiX19pbXBvcnREZWZhdWx0IiwidGhpcyIsIm1vZCIsIl9fZXNNb2R1bGUiLCJkZWZhdWx0IiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJleHBvcnRzIiwidmFsdWUiLCJleHByZXNzaW9uRXZhbHVhdG9yXzEiLCJyZXF1aXJlIiwiZXhwcmVzc2lvblR5cGVfMSIsImZ1bmN0aW9uVXRpbHNfMSIsInJldHVyblR5cGVfMSIsImJ0b2FfbGl0ZV8xIiwiRGF0YVVyaSIsIkV4cHJlc3Npb25FdmFsdWF0b3IiLCJbb2JqZWN0IE9iamVjdF0iLCJzdXBlciIsIkV4cHJlc3Npb25UeXBlIiwiZXZhbHVhdG9yIiwiUmV0dXJuVHlwZSIsIlN0cmluZyIsIkZ1bmN0aW9uVXRpbHMiLCJ2YWxpZGF0ZVVuYXJ5IiwiYXBwbHkiLCJhcmdzIiwiY29uY2F0IiwidmVyaWZ5U3RyaW5nIl0sIm1hcHBpbmdzIjoiQUFBQSxhQVFBLElBQUlBLGdCQUFtQkMsTUFBUUEsS0FBS0QsaUJBQW9CLFNBQVVFLEtBQzlELE9BQVFBLEtBQU9BLElBQUlDLFdBQWNELElBQU0sQ0FBRUUsUUFBV0YsTUFFeERHLE9BQU9DLGVBQWVDLFFBQVMsYUFBYyxDQUFFQyxPQUFPLElBQ3RELE1BQU1DLHNCQUF3QkMsUUFBUSwwQkFDaENDLGlCQUFtQkQsUUFBUSxxQkFDM0JFLGdCQUFrQkYsUUFBUSxvQkFDMUJHLGFBQWVILFFBQVEsaUJBQ3ZCSSxZQUFjZCxnQkFBZ0JVLFFBQVEsY0FJNUMsTUFBTUssZ0JBQWdCTixzQkFBc0JPLG9CQUl4Q0MsY0FDSUMsTUFBTVAsaUJBQWlCUSxlQUFlSixRQUFTQSxRQUFRSyxZQUFhUCxhQUFhUSxXQUFXQyxPQUFRVixnQkFBZ0JXLGNBQWNDLGVBS3RJUCxtQkFDSSxPQUFPTCxnQkFBZ0JXLGNBQWNFLE1BQU9DLE1BQVMsd0NBQXdDQyxPQUFPYixZQUFZVixRQUFRc0IsS0FBSyxLQUFNZCxnQkFBZ0JXLGNBQWNLLGVBR3pLckIsUUFBUVEsUUFBVUEiLCJmaWxlIjoiL2hvbWUvdnN0cy93b3JrLzEvcy9saWJyYXJpZXMvYWRhcHRpdmUtZXhwcmVzc2lvbnMvbGliL2J1aWx0aW5GdW5jdGlvbnMvZGF0YVVyaS5qcyJ9