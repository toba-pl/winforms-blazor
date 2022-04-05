"use strict";Object.defineProperty(exports,"__esModule",{value:!0});const expressionEvaluator_1=require(180),expressionType_1=require(192),functionUtils_1=require(196),returnType_1=require(213);class XPath extends expressionEvaluator_1.ExpressionEvaluator{constructor(){super(expressionType_1.ExpressionType.XPath,XPath.evaluator(),returnType_1.ReturnType.Object,XPath.validator)}static evaluator(){return functionUtils_1.FunctionUtils.applyWithError(args=>XPath.platformSpecificXPath(args))}static platformSpecificXPath(args){if("undefined"==typeof window&&"undefined"==typeof self){let error,result;const xpath=require(438),{DOMParser:DOMParser}=require(242);let doc;try{doc=(new DOMParser).parseFromString(args[0],"text/xml")}catch(err){error=`${args[0]} is not valid xml input`}if(!error){const nodes=xpath.select(args[1],doc);Array.isArray(nodes)?0===nodes.length?error=`There is no matched nodes for the expression ${args[1]} in the xml: ${args[0]}`:result=nodes.map(node=>node.toString()):result=nodes}return{value:result,error:error}}{let error,result,xmlDoc;try{xmlDoc=(new DOMParser).parseFromString(args[0],"text/xml")}catch(err){error=error=`${args[0]} is not valid xml input`}if(!error){const nodes=xmlDoc.evaluate(args[1],xmlDoc,null,XPathResult.ANY_TYPE,null);let node=nodes.iterateNext();const evalResult=[];for(;node;)evalResult.push(node.childNodes[0].nodeValue),node=nodes.iterateNext();return 0===evalResult.length?error=`There is no matched nodes for the expression ${args[1]} in the xml: ${args[0]}`:result=1===evalResult.length?evalResult[0]:evalResult,{value:result,error:error}}}}static validator(expression){functionUtils_1.FunctionUtils.validateOrder(expression,void 0,returnType_1.ReturnType.Object,returnType_1.ReturnType.String)}}exports.XPath=XPath;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInhwYXRoLmpzIl0sIm5hbWVzIjpbIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZXhwb3J0cyIsInZhbHVlIiwiZXhwcmVzc2lvbkV2YWx1YXRvcl8xIiwicmVxdWlyZSIsImV4cHJlc3Npb25UeXBlXzEiLCJmdW5jdGlvblV0aWxzXzEiLCJyZXR1cm5UeXBlXzEiLCJYUGF0aCIsIkV4cHJlc3Npb25FdmFsdWF0b3IiLCJbb2JqZWN0IE9iamVjdF0iLCJzdXBlciIsIkV4cHJlc3Npb25UeXBlIiwiZXZhbHVhdG9yIiwiUmV0dXJuVHlwZSIsInZhbGlkYXRvciIsIkZ1bmN0aW9uVXRpbHMiLCJhcHBseVdpdGhFcnJvciIsImFyZ3MiLCJwbGF0Zm9ybVNwZWNpZmljWFBhdGgiLCJ3aW5kb3ciLCJzZWxmIiwiZXJyb3IiLCJyZXN1bHQiLCJ4cGF0aCIsIkRPTVBhcnNlciIsImRvYyIsInBhcnNlRnJvbVN0cmluZyIsImVyciIsIm5vZGVzIiwic2VsZWN0IiwiQXJyYXkiLCJpc0FycmF5IiwibGVuZ3RoIiwibWFwIiwibm9kZSIsInRvU3RyaW5nIiwieG1sRG9jIiwiZXZhbHVhdGUiLCJYUGF0aFJlc3VsdCIsIkFOWV9UWVBFIiwiaXRlcmF0ZU5leHQiLCJldmFsUmVzdWx0IiwicHVzaCIsImNoaWxkTm9kZXMiLCJub2RlVmFsdWUiLCJleHByZXNzaW9uIiwidmFsaWRhdGVPcmRlciIsInVuZGVmaW5lZCIsIlN0cmluZyJdLCJtYXBwaW5ncyI6IkFBQUEsYUFRQUEsT0FBT0MsZUFBZUMsUUFBUyxhQUFjLENBQUVDLE9BQU8sSUFDdEQsTUFBTUMsc0JBQXdCQyxRQUFRLDBCQUNoQ0MsaUJBQW1CRCxRQUFRLHFCQUMzQkUsZ0JBQWtCRixRQUFRLG9CQUMxQkcsYUFBZUgsUUFBUSxpQkFJN0IsTUFBTUksY0FBY0wsc0JBQXNCTSxvQkFJdENDLGNBQ0lDLE1BQU1OLGlCQUFpQk8sZUFBZUosTUFBT0EsTUFBTUssWUFBYU4sYUFBYU8sV0FBV2YsT0FBUVMsTUFBTU8sV0FFMUdMLG1CQUNJLE9BQU9KLGdCQUFnQlUsY0FBY0MsZUFBZ0JDLE1BQVNWLE1BQU1XLHNCQUFzQkQsT0FFOUZSLDZCQUE2QlEsTUFDekIsR0FBc0Isb0JBQVhFLFFBQTBDLG9CQUFUQyxLQWdDdkMsQ0FDRCxJQUFJQyxNQUNBQyxPQUVKLE1BQU1DLE1BQVFwQixRQUFRLFVBRWhCcUIsVUFBRUEsV0FBY3JCLFFBQVEsa0JBQzlCLElBQUlzQixJQUNKLElBQ0lBLEtBQU0sSUFBSUQsV0FBWUUsZ0JBQWdCVCxLQUFLLEdBQUksWUFFbkQsTUFBT1UsS0FDSE4sU0FBV0osS0FBSyw0QkFFcEIsSUFBS0ksTUFBTyxDQUNSLE1BQU1PLE1BQVFMLE1BQU1NLE9BQU9aLEtBQUssR0FBSVEsS0FDaENLLE1BQU1DLFFBQVFILE9BQ08sSUFBakJBLE1BQU1JLE9BQ05YLHNEQUF3REosS0FBSyxrQkFBa0JBLEtBQUssS0FHcEZLLE9BQVNNLE1BQU1LLElBQUtDLE1BQVNBLEtBQUtDLFlBSXRDYixPQUFTTSxNQUdqQixNQUFPLENBQUUzQixNQUFPcUIsT0FBUUQsTUFBT0EsT0E1RCtCLENBRTlELElBQUlBLE1BQ0FDLE9BQ0FjLE9BQ0osSUFFSUEsUUFEZSxJQUFJWixXQUNIRSxnQkFBZ0JULEtBQUssR0FBSSxZQUU3QyxNQUFPVSxLQUNITixNQUFRQSxTQUFXSixLQUFLLDRCQUU1QixJQUFLSSxNQUFPLENBQ1IsTUFBTU8sTUFBUVEsT0FBT0MsU0FBU3BCLEtBQUssR0FBSW1CLE9BQVEsS0FBTUUsWUFBWUMsU0FBVSxNQUMzRSxJQUFJTCxLQUFPTixNQUFNWSxjQUNqQixNQUFNQyxXQUFhLEdBQ25CLEtBQU9QLE1BQ0hPLFdBQVdDLEtBQUtSLEtBQUtTLFdBQVcsR0FBR0MsV0FDbkNWLEtBQU9OLE1BQU1ZLGNBV2pCLE9BVDBCLElBQXRCQyxXQUFXVCxPQUNYWCxzREFBd0RKLEtBQUssa0JBQWtCQSxLQUFLLEtBR3BGSyxPQUQyQixJQUF0Qm1CLFdBQVdULE9BQ1BTLFdBQVcsR0FHWEEsV0FFTixDQUFFeEMsTUFBT3FCLE9BQVFELE1BQU9BLFNBc0MzQ1osaUJBQWlCb0MsWUFDYnhDLGdCQUFnQlUsY0FBYytCLGNBQWNELGdCQUFZRSxFQUFXekMsYUFBYU8sV0FBV2YsT0FBUVEsYUFBYU8sV0FBV21DLFNBR25JaEQsUUFBUU8sTUFBUUEiLCJmaWxlIjoiL2hvbWUvdnN0cy93b3JrLzEvcy9saWJyYXJpZXMvYWRhcHRpdmUtZXhwcmVzc2lvbnMvbGliL2J1aWx0aW5GdW5jdGlvbnMveHBhdGguanMifQ==