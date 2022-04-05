"use strict";Object.defineProperty(exports,"__esModule",{value:!0});const expressionEvaluator_1=require(180),expressionType_1=require(192),functionUtils_1=require(196),returnType_1=require(213);class Substring extends expressionEvaluator_1.ExpressionEvaluator{constructor(){super(expressionType_1.ExpressionType.Substring,Substring.evaluator,returnType_1.ReturnType.String,Substring.validator)}static evaluator(expression,state,options){let result;const{value:str,error:childrenError}=expression.children[0].tryEvaluate(state,options);let error=childrenError;if(!error)if("string"==typeof str){let start;const startExpr=expression.children[1];if(({value:start,error:error}=startExpr.tryEvaluate(state,options)),error||Number.isInteger(start)?(start<0||start>str.length)&&(error=`${startExpr}=${start} which is out of range for ${str}`):error=`${startExpr} is not an integer.`,!error){let length;if(2===expression.children.length)length=str.length-start;else{const lengthExpr=expression.children[2];({value:length,error:error}=lengthExpr.tryEvaluate(state,options)),error||Number.isInteger(length)?(length<0||Number(start)+Number(length)>str.length)&&(error=`${lengthExpr}=${length} which is out of range for ${str}`):error=`${lengthExpr} is not an integer`}error||(result=str.substr(start,length))}}else void 0===str?result="":error=`${expression.children[0]} is neither a string nor a null object.`;return{value:result,error:error}}static validator(expression){functionUtils_1.FunctionUtils.validateOrder(expression,[returnType_1.ReturnType.Number],returnType_1.ReturnType.String,returnType_1.ReturnType.Number)}}exports.Substring=Substring;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN1YnN0cmluZy5qcyJdLCJuYW1lcyI6WyJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImV4cG9ydHMiLCJ2YWx1ZSIsImV4cHJlc3Npb25FdmFsdWF0b3JfMSIsInJlcXVpcmUiLCJleHByZXNzaW9uVHlwZV8xIiwiZnVuY3Rpb25VdGlsc18xIiwicmV0dXJuVHlwZV8xIiwiU3Vic3RyaW5nIiwiRXhwcmVzc2lvbkV2YWx1YXRvciIsIltvYmplY3QgT2JqZWN0XSIsInN1cGVyIiwiRXhwcmVzc2lvblR5cGUiLCJldmFsdWF0b3IiLCJSZXR1cm5UeXBlIiwiU3RyaW5nIiwidmFsaWRhdG9yIiwiZXhwcmVzc2lvbiIsInN0YXRlIiwib3B0aW9ucyIsInJlc3VsdCIsInN0ciIsImVycm9yIiwiY2hpbGRyZW5FcnJvciIsImNoaWxkcmVuIiwidHJ5RXZhbHVhdGUiLCJzdGFydCIsInN0YXJ0RXhwciIsIk51bWJlciIsImlzSW50ZWdlciIsImxlbmd0aCIsImxlbmd0aEV4cHIiLCJzdWJzdHIiLCJ1bmRlZmluZWQiLCJGdW5jdGlvblV0aWxzIiwidmFsaWRhdGVPcmRlciJdLCJtYXBwaW5ncyI6IkFBQUEsYUFRQUEsT0FBT0MsZUFBZUMsUUFBUyxhQUFjLENBQUVDLE9BQU8sSUFDdEQsTUFBTUMsc0JBQXdCQyxRQUFRLDBCQUNoQ0MsaUJBQW1CRCxRQUFRLHFCQUMzQkUsZ0JBQWtCRixRQUFRLG9CQUMxQkcsYUFBZUgsUUFBUSxpQkFJN0IsTUFBTUksa0JBQWtCTCxzQkFBc0JNLG9CQUkxQ0MsY0FDSUMsTUFBTU4saUJBQWlCTyxlQUFlSixVQUFXQSxVQUFVSyxVQUFXTixhQUFhTyxXQUFXQyxPQUFRUCxVQUFVUSxXQUtwSE4saUJBQWlCTyxXQUFZQyxNQUFPQyxTQUNoQyxJQUFJQyxPQUNKLE1BQVFsQixNQUFPbUIsSUFBS0MsTUFBT0MsZUFBa0JOLFdBQVdPLFNBQVMsR0FBR0MsWUFBWVAsTUFBT0MsU0FDdkYsSUFBSUcsTUFBUUMsY0FDWixJQUFLRCxNQUNELEdBQW1CLGlCQUFSRCxJQUFrQixDQUN6QixJQUFJSyxNQUNKLE1BQU1DLFVBQVlWLFdBQVdPLFNBQVMsR0FRdEMsS0FQR3RCLE1BQU93QixNQUFPSixNQUFBQSxPQUFVSyxVQUFVRixZQUFZUCxNQUFPQyxVQUNuREcsT0FBVU0sT0FBT0MsVUFBVUgsUUFHdkJBLE1BQVEsR0FBS0EsTUFBUUwsSUFBSVMsVUFDOUJSLFNBQVdLLGFBQWFELG1DQUFtQ0wsT0FIM0RDLFNBQVdLLGdDQUtWTCxNQUFPLENBQ1IsSUFBSVEsT0FDSixHQUFtQyxJQUEvQmIsV0FBV08sU0FBU00sT0FFcEJBLE9BQVNULElBQUlTLE9BQVNKLFVBRXJCLENBQ0QsTUFBTUssV0FBYWQsV0FBV08sU0FBUyxLQUNwQ3RCLE1BQU80QixPQUFRUixNQUFBQSxPQUFVUyxXQUFXTixZQUFZUCxNQUFPQyxVQUNyREcsT0FBVU0sT0FBT0MsVUFBVUMsU0FHdkJBLE9BQVMsR0FBS0YsT0FBT0YsT0FBU0UsT0FBT0UsUUFBVVQsSUFBSVMsVUFDeERSLFNBQVdTLGNBQWNELG9DQUFvQ1QsT0FIN0RDLFNBQVdTLCtCQU1kVCxRQUNERixPQUFTQyxJQUFJVyxPQUFPTixNQUFPSSxvQkFJdEJHLElBQVJaLElBQ0xELE9BQVMsR0FHVEUsU0FBV0wsV0FBV08sU0FBUyw0Q0FHdkMsTUFBTyxDQUFFdEIsTUFBT2tCLE9BQVFFLE1BQUFBLE9BSzVCWixpQkFBaUJPLFlBQ2JYLGdCQUFnQjRCLGNBQWNDLGNBQWNsQixXQUFZLENBQUNWLGFBQWFPLFdBQVdjLFFBQVNyQixhQUFhTyxXQUFXQyxPQUFRUixhQUFhTyxXQUFXYyxTQUcxSjNCLFFBQVFPLFVBQVlBIiwiZmlsZSI6Ii9ob21lL3ZzdHMvd29yay8xL3MvbGlicmFyaWVzL2FkYXB0aXZlLWV4cHJlc3Npb25zL2xpYi9idWlsdGluRnVuY3Rpb25zL3N1YnN0cmluZy5qcyJ9