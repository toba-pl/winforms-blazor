"use strict";var __importStar=this&&this.__importStar||function(mod){if(mod&&mod.__esModule)return mod;var result={};if(null!=mod)for(var k in mod)Object.hasOwnProperty.call(mod,k)&&(result[k]=mod[k]);return result.default=mod,result};Object.defineProperty(exports,"__esModule",{value:!0});const jsPath=__importStar(require(426)),expressionEvaluator_1=require(180),expressionType_1=require(192),functionUtils_1=require(196),returnType_1=require(213);class JPath extends expressionEvaluator_1.ExpressionEvaluator{constructor(){super(expressionType_1.ExpressionType.JPath,JPath.evaluator(),returnType_1.ReturnType.Object,JPath.validator)}static evaluator(){return functionUtils_1.FunctionUtils.applyWithError(args=>JPath.evalJPath(args[0],args[1].toString()))}static evalJPath(jsonEntity,path){let error,evaled,json;if("string"==typeof jsonEntity)try{json=JSON.parse(jsonEntity)}catch(e){error=`${jsonEntity} is not a valid json string`}else"object"==typeof jsonEntity?json=jsonEntity:error="the first parameter should be either an object or a string";if(!error)try{evaled=jsPath.apply(path,json)}catch(e){error=`${path} is not a valid path + ${e}`}return{value:evaled,error:error}}static validator(expr){functionUtils_1.FunctionUtils.validateOrder(expr,void 0,returnType_1.ReturnType.Object,returnType_1.ReturnType.String)}}exports.JPath=JPath;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImpQYXRoLmpzIl0sIm5hbWVzIjpbIl9faW1wb3J0U3RhciIsInRoaXMiLCJtb2QiLCJfX2VzTW9kdWxlIiwicmVzdWx0IiwiayIsIk9iamVjdCIsImhhc093blByb3BlcnR5IiwiY2FsbCIsImRlZmluZVByb3BlcnR5IiwiZXhwb3J0cyIsInZhbHVlIiwianNQYXRoIiwicmVxdWlyZSIsImV4cHJlc3Npb25FdmFsdWF0b3JfMSIsImV4cHJlc3Npb25UeXBlXzEiLCJmdW5jdGlvblV0aWxzXzEiLCJyZXR1cm5UeXBlXzEiLCJKUGF0aCIsIkV4cHJlc3Npb25FdmFsdWF0b3IiLCJbb2JqZWN0IE9iamVjdF0iLCJzdXBlciIsIkV4cHJlc3Npb25UeXBlIiwiZXZhbHVhdG9yIiwiUmV0dXJuVHlwZSIsInZhbGlkYXRvciIsIkZ1bmN0aW9uVXRpbHMiLCJhcHBseVdpdGhFcnJvciIsImFyZ3MiLCJldmFsSlBhdGgiLCJ0b1N0cmluZyIsImpzb25FbnRpdHkiLCJwYXRoIiwiZXJyb3IiLCJldmFsZWQiLCJqc29uIiwiSlNPTiIsInBhcnNlIiwiZSIsImFwcGx5IiwiZXhwciIsInZhbGlkYXRlT3JkZXIiLCJ1bmRlZmluZWQiLCJTdHJpbmciXSwibWFwcGluZ3MiOiJBQUFBLGFBUUEsSUFBSUEsYUFBZ0JDLE1BQVFBLEtBQUtELGNBQWlCLFNBQVVFLEtBQ3hELEdBQUlBLEtBQU9BLElBQUlDLFdBQVksT0FBT0QsSUFDbEMsSUFBSUUsT0FBUyxHQUNiLEdBQVcsTUFBUEYsSUFBYSxJQUFLLElBQUlHLEtBQUtILElBQVNJLE9BQU9DLGVBQWVDLEtBQUtOLElBQUtHLEtBQUlELE9BQU9DLEdBQUtILElBQUlHLElBRTVGLE9BREFELE9BQWdCLFFBQUlGLElBQ2JFLFFBRVhFLE9BQU9HLGVBQWVDLFFBQVMsYUFBYyxDQUFFQyxPQUFPLElBQ3RELE1BQU1DLE9BQVNaLGFBQWFhLFFBQVEsV0FDOUJDLHNCQUF3QkQsUUFBUSwwQkFDaENFLGlCQUFtQkYsUUFBUSxxQkFDM0JHLGdCQUFrQkgsUUFBUSxvQkFDMUJJLGFBQWVKLFFBQVEsaUJBSTdCLE1BQU1LLGNBQWNKLHNCQUFzQkssb0JBSXRDQyxjQUNJQyxNQUFNTixpQkFBaUJPLGVBQWVKLE1BQU9BLE1BQU1LLFlBQWFOLGFBQWFPLFdBQVdsQixPQUFRWSxNQUFNTyxXQUsxR0wsbUJBQ0ksT0FBT0osZ0JBQWdCVSxjQUFjQyxlQUFnQkMsTUFBU1YsTUFBTVcsVUFBVUQsS0FBSyxHQUFJQSxLQUFLLEdBQUdFLGFBS25HVixpQkFBaUJXLFdBQVlDLE1BQ3pCLElBQUlDLE1BQ0FDLE9BQ0FDLEtBQ0osR0FBMEIsaUJBQWZKLFdBQ1AsSUFDSUksS0FBT0MsS0FBS0MsTUFBTU4sWUFFdEIsTUFBT08sR0FDSEwsU0FBV0YsNENBR1ksaUJBQWZBLFdBQ1pJLEtBQU9KLFdBR1BFLE1BQVEsNkRBRVosSUFBS0EsTUFDRCxJQUNJQyxPQUFTdEIsT0FBTzJCLE1BQU1QLEtBQU1HLE1BRWhDLE1BQU9HLEdBQ0hMLFNBQVdELDhCQUE4Qk0sSUFHakQsTUFBTyxDQUFFM0IsTUFBT3VCLE9BQVFELE1BQUFBLE9BSzVCYixpQkFBaUJvQixNQUNieEIsZ0JBQWdCVSxjQUFjZSxjQUFjRCxVQUFNRSxFQUFXekIsYUFBYU8sV0FBV2xCLE9BQVFXLGFBQWFPLFdBQVdtQixTQUc3SGpDLFFBQVFRLE1BQVFBIiwiZmlsZSI6Ii9ob21lL3ZzdHMvd29yay8xL3MvbGlicmFyaWVzL2FkYXB0aXZlLWV4cHJlc3Npb25zL2xpYi9idWlsdGluRnVuY3Rpb25zL2pQYXRoLmpzIn0=