"use strict";Object.defineProperty(exports,"__esModule",{value:!0});const expressionEvaluator_1=require(180),expressionType_1=require(192),functionUtils_1=require(196),functionUtils_internal_1=require(195),returnType_1=require(213);class UriScheme extends expressionEvaluator_1.ExpressionEvaluator{constructor(){super(expressionType_1.ExpressionType.UriScheme,UriScheme.evaluator,returnType_1.ReturnType.String,functionUtils_1.FunctionUtils.validateUnary)}static evaluator(expr,state,options){let value;const{args:args,error:childrenError}=functionUtils_1.FunctionUtils.evaluateChildren(expr,state,options);let error=childrenError;return error||("string"==typeof args[0]?({value:value,error:error}=UriScheme.evalUriScheme(args[0])):error=`${expr} should contain a URI string.`),{value:value,error:error}}static evalUriScheme(uri){let result;const{value:parsed,error:parseError}=functionUtils_internal_1.InternalFunctionUtils.parseUri(uri);let error=parseError;if(!error)try{result=parsed.protocol.replace(":","")}catch(e){error="invalid operation, input uri should be an absolute URI"}return{value:result,error:error}}}exports.UriScheme=UriScheme;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVyaVNjaGVtZS5qcyJdLCJuYW1lcyI6WyJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImV4cG9ydHMiLCJ2YWx1ZSIsImV4cHJlc3Npb25FdmFsdWF0b3JfMSIsInJlcXVpcmUiLCJleHByZXNzaW9uVHlwZV8xIiwiZnVuY3Rpb25VdGlsc18xIiwiZnVuY3Rpb25VdGlsc19pbnRlcm5hbF8xIiwicmV0dXJuVHlwZV8xIiwiVXJpU2NoZW1lIiwiRXhwcmVzc2lvbkV2YWx1YXRvciIsIltvYmplY3QgT2JqZWN0XSIsInN1cGVyIiwiRXhwcmVzc2lvblR5cGUiLCJldmFsdWF0b3IiLCJSZXR1cm5UeXBlIiwiU3RyaW5nIiwiRnVuY3Rpb25VdGlscyIsInZhbGlkYXRlVW5hcnkiLCJleHByIiwic3RhdGUiLCJvcHRpb25zIiwiYXJncyIsImVycm9yIiwiY2hpbGRyZW5FcnJvciIsImV2YWx1YXRlQ2hpbGRyZW4iLCJldmFsVXJpU2NoZW1lIiwidXJpIiwicmVzdWx0IiwicGFyc2VkIiwicGFyc2VFcnJvciIsIkludGVybmFsRnVuY3Rpb25VdGlscyIsInBhcnNlVXJpIiwicHJvdG9jb2wiLCJyZXBsYWNlIiwiZSJdLCJtYXBwaW5ncyI6IkFBQUEsYUFRQUEsT0FBT0MsZUFBZUMsUUFBUyxhQUFjLENBQUVDLE9BQU8sSUFDdEQsTUFBTUMsc0JBQXdCQyxRQUFRLDBCQUNoQ0MsaUJBQW1CRCxRQUFRLHFCQUMzQkUsZ0JBQWtCRixRQUFRLG9CQUMxQkcseUJBQTJCSCxRQUFRLDZCQUNuQ0ksYUFBZUosUUFBUSxpQkFJN0IsTUFBTUssa0JBQWtCTixzQkFBc0JPLG9CQUkxQ0MsY0FDSUMsTUFBTVAsaUJBQWlCUSxlQUFlSixVQUFXQSxVQUFVSyxVQUFXTixhQUFhTyxXQUFXQyxPQUFRVixnQkFBZ0JXLGNBQWNDLGVBS3hJUCxpQkFBaUJRLEtBQU1DLE1BQU9DLFNBQzFCLElBQUluQixNQUNKLE1BQU1vQixLQUFFQSxLQUFNQyxNQUFPQyxlQUFrQmxCLGdCQUFnQlcsY0FBY1EsaUJBQWlCTixLQUFNQyxNQUFPQyxTQUNuRyxJQUFJRSxNQUFRQyxjQVNaLE9BUktELFFBQ3NCLGlCQUFaRCxLQUFLLEtBQ1RwQixNQUFBQSxNQUFPcUIsTUFBQUEsT0FBVWQsVUFBVWlCLGNBQWNKLEtBQUssS0FHakRDLFNBQVdKLHFDQUdaLENBQUVqQixNQUFBQSxNQUFPcUIsTUFBQUEsT0FLcEJaLHFCQUFxQmdCLEtBQ2pCLElBQUlDLE9BQ0osTUFBUTFCLE1BQU8yQixPQUFRTixNQUFPTyxZQUFldkIseUJBQXlCd0Isc0JBQXNCQyxTQUFTTCxLQUNyRyxJQUFJSixNQUFRTyxXQUNaLElBQUtQLE1BQ0QsSUFDSUssT0FBU0MsT0FBT0ksU0FBU0MsUUFBUSxJQUFLLElBRTFDLE1BQU9DLEdBQ0haLE1BQVEseURBR2hCLE1BQU8sQ0FBRXJCLE1BQU8wQixPQUFRTCxNQUFBQSxRQUdoQ3RCLFFBQVFRLFVBQVlBIiwiZmlsZSI6Ii9ob21lL3ZzdHMvd29yay8xL3MvbGlicmFyaWVzL2FkYXB0aXZlLWV4cHJlc3Npb25zL2xpYi9idWlsdGluRnVuY3Rpb25zL3VyaVNjaGVtZS5qcyJ9