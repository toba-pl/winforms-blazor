"use strict";Object.defineProperty(exports,"__esModule",{value:!0});const expressionEvaluator_1=require(180),expressionType_1=require(192),functionUtils_1=require(196),returnType_1=require(213);class Skip extends expressionEvaluator_1.ExpressionEvaluator{constructor(){super(expressionType_1.ExpressionType.Skip,Skip.evaluator,returnType_1.ReturnType.Array,Skip.validator)}static evaluator(expression,state,options){let result;const{value:arr,error:childrenError}=expression.children[0].tryEvaluate(state,options);let error=childrenError;if(!error)if(Array.isArray(arr)){let start;const startExpr=expression.children[1];({value:start,error:error}=startExpr.tryEvaluate(state,options)),error||Number.isInteger(start)||(error=`${startExpr} is not an integer.`),error||(start=Math.max(start,0),result=arr.slice(start))}else error=`${expression.children[0]} is not array.`;return{value:result,error:error}}static validator(expression){functionUtils_1.FunctionUtils.validateOrder(expression,[],returnType_1.ReturnType.Array,returnType_1.ReturnType.Number)}}exports.Skip=Skip;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNraXAuanMiXSwibmFtZXMiOlsiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJleHBvcnRzIiwidmFsdWUiLCJleHByZXNzaW9uRXZhbHVhdG9yXzEiLCJyZXF1aXJlIiwiZXhwcmVzc2lvblR5cGVfMSIsImZ1bmN0aW9uVXRpbHNfMSIsInJldHVyblR5cGVfMSIsIlNraXAiLCJFeHByZXNzaW9uRXZhbHVhdG9yIiwiW29iamVjdCBPYmplY3RdIiwic3VwZXIiLCJFeHByZXNzaW9uVHlwZSIsImV2YWx1YXRvciIsIlJldHVyblR5cGUiLCJBcnJheSIsInZhbGlkYXRvciIsImV4cHJlc3Npb24iLCJzdGF0ZSIsIm9wdGlvbnMiLCJyZXN1bHQiLCJhcnIiLCJlcnJvciIsImNoaWxkcmVuRXJyb3IiLCJjaGlsZHJlbiIsInRyeUV2YWx1YXRlIiwiaXNBcnJheSIsInN0YXJ0Iiwic3RhcnRFeHByIiwiTnVtYmVyIiwiaXNJbnRlZ2VyIiwiTWF0aCIsIm1heCIsInNsaWNlIiwiRnVuY3Rpb25VdGlscyIsInZhbGlkYXRlT3JkZXIiXSwibWFwcGluZ3MiOiJBQUFBLGFBUUFBLE9BQU9DLGVBQWVDLFFBQVMsYUFBYyxDQUFFQyxPQUFPLElBQ3RELE1BQU1DLHNCQUF3QkMsUUFBUSwwQkFDaENDLGlCQUFtQkQsUUFBUSxxQkFDM0JFLGdCQUFrQkYsUUFBUSxvQkFDMUJHLGFBQWVILFFBQVEsaUJBSTdCLE1BQU1JLGFBQWFMLHNCQUFzQk0sb0JBSXJDQyxjQUNJQyxNQUFNTixpQkFBaUJPLGVBQWVKLEtBQU1BLEtBQUtLLFVBQVdOLGFBQWFPLFdBQVdDLE1BQU9QLEtBQUtRLFdBS3BHTixpQkFBaUJPLFdBQVlDLE1BQU9DLFNBQ2hDLElBQUlDLE9BQ0osTUFBUWxCLE1BQU9tQixJQUFLQyxNQUFPQyxlQUFrQk4sV0FBV08sU0FBUyxHQUFHQyxZQUFZUCxNQUFPQyxTQUN2RixJQUFJRyxNQUFRQyxjQUNaLElBQUtELE1BQ0QsR0FBSVAsTUFBTVcsUUFBUUwsS0FBTSxDQUNwQixJQUFJTSxNQUNKLE1BQU1DLFVBQVlYLFdBQVdPLFNBQVMsS0FDbkN0QixNQUFPeUIsTUFBT0wsTUFBQUEsT0FBVU0sVUFBVUgsWUFBWVAsTUFBT0MsVUFDbkRHLE9BQVVPLE9BQU9DLFVBQVVILFNBQzVCTCxTQUFXTSxnQ0FFVk4sUUFDREssTUFBUUksS0FBS0MsSUFBSUwsTUFBTyxHQUN4QlAsT0FBU0MsSUFBSVksTUFBTU4sYUFJdkJMLFNBQVdMLFdBQVdPLFNBQVMsbUJBR3ZDLE1BQU8sQ0FBRXRCLE1BQU9rQixPQUFRRSxNQUFBQSxPQUs1QlosaUJBQWlCTyxZQUNiWCxnQkFBZ0I0QixjQUFjQyxjQUFjbEIsV0FBWSxHQUFJVixhQUFhTyxXQUFXQyxNQUFPUixhQUFhTyxXQUFXZSxTQUczSDVCLFFBQVFPLEtBQU9BIiwiZmlsZSI6Ii9ob21lL3ZzdHMvd29yay8xL3MvbGlicmFyaWVzL2FkYXB0aXZlLWV4cHJlc3Npb25zL2xpYi9idWlsdGluRnVuY3Rpb25zL3NraXAuanMifQ==