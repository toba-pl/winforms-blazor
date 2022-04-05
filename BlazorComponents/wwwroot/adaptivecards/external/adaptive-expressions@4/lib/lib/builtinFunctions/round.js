"use strict";Object.defineProperty(exports,"__esModule",{value:!0});const expressionEvaluator_1=require(180),expressionType_1=require(192),functionUtils_1=require(196),returnType_1=require(213);class Round extends expressionEvaluator_1.ExpressionEvaluator{constructor(){super(expressionType_1.ExpressionType.Round,Round.evaluator(),returnType_1.ReturnType.Number,functionUtils_1.FunctionUtils.validateUnaryOrBinaryNumber)}static evaluator(){return functionUtils_1.FunctionUtils.applyWithError(args=>{let result,error;if(2!==args.length||Number.isInteger(args[1])||(error=`The second parameter ${args[1]} must be an integer.`),!error){const digits=2===args.length?args[1]:0;digits<0||digits>15?error=`The second parameter ${args[1]} must be an integer between 0 and 15;`:result=Round.roundToPrecision(args[0],digits)}return{value:result,error:error}},functionUtils_1.FunctionUtils.verifyNumber)}}Round.roundToPrecision=((num,digits)=>Math.round(num*Math.pow(10,digits))/Math.pow(10,digits)),exports.Round=Round;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJvdW5kLmpzIl0sIm5hbWVzIjpbIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZXhwb3J0cyIsInZhbHVlIiwiZXhwcmVzc2lvbkV2YWx1YXRvcl8xIiwicmVxdWlyZSIsImV4cHJlc3Npb25UeXBlXzEiLCJmdW5jdGlvblV0aWxzXzEiLCJyZXR1cm5UeXBlXzEiLCJSb3VuZCIsIkV4cHJlc3Npb25FdmFsdWF0b3IiLCJbb2JqZWN0IE9iamVjdF0iLCJzdXBlciIsIkV4cHJlc3Npb25UeXBlIiwiZXZhbHVhdG9yIiwiUmV0dXJuVHlwZSIsIk51bWJlciIsIkZ1bmN0aW9uVXRpbHMiLCJ2YWxpZGF0ZVVuYXJ5T3JCaW5hcnlOdW1iZXIiLCJhcHBseVdpdGhFcnJvciIsImFyZ3MiLCJyZXN1bHQiLCJlcnJvciIsImxlbmd0aCIsImlzSW50ZWdlciIsImRpZ2l0cyIsInJvdW5kVG9QcmVjaXNpb24iLCJ2ZXJpZnlOdW1iZXIiLCJudW0iLCJNYXRoIiwicm91bmQiLCJwb3ciXSwibWFwcGluZ3MiOiJBQUFBLGFBUUFBLE9BQU9DLGVBQWVDLFFBQVMsYUFBYyxDQUFFQyxPQUFPLElBQ3RELE1BQU1DLHNCQUF3QkMsUUFBUSwwQkFDaENDLGlCQUFtQkQsUUFBUSxxQkFDM0JFLGdCQUFrQkYsUUFBUSxvQkFDMUJHLGFBQWVILFFBQVEsaUJBSTdCLE1BQU1JLGNBQWNMLHNCQUFzQk0sb0JBSXRDQyxjQUNJQyxNQUFNTixpQkFBaUJPLGVBQWVKLE1BQU9BLE1BQU1LLFlBQWFOLGFBQWFPLFdBQVdDLE9BQVFULGdCQUFnQlUsY0FBY0MsNkJBS2xJUCxtQkFDSSxPQUFPSixnQkFBZ0JVLGNBQWNFLGVBQWdCQyxPQUNqRCxJQUFJQyxPQUNBQyxNQUlKLEdBSG9CLElBQWhCRixLQUFLRyxRQUFpQlAsT0FBT1EsVUFBVUosS0FBSyxNQUM1Q0UsOEJBQWdDRixLQUFLLDJCQUVwQ0UsTUFBTyxDQUNSLE1BQU1HLE9BQXlCLElBQWhCTCxLQUFLRyxPQUFlSCxLQUFLLEdBQUssRUFDekNLLE9BQVMsR0FBS0EsT0FBUyxHQUN2QkgsOEJBQWdDRixLQUFLLDBDQUdyQ0MsT0FBU1osTUFBTWlCLGlCQUFpQk4sS0FBSyxHQUFJSyxRQUdqRCxNQUFPLENBQUV0QixNQUFPa0IsT0FBUUMsTUFBQUEsUUFDekJmLGdCQUFnQlUsY0FBY1UsZUFHekNsQixNQUFNaUIsaUJBQW1CLEVBQUNFLElBQUtILFNBQVdJLEtBQUtDLE1BQU1GLElBQU1DLEtBQUtFLElBQUksR0FBSU4sU0FBV0ksS0FBS0UsSUFBSSxHQUFJTixTQUNoR3ZCLFFBQVFPLE1BQVFBIiwiZmlsZSI6Ii9ob21lL3ZzdHMvd29yay8xL3MvbGlicmFyaWVzL2FkYXB0aXZlLWV4cHJlc3Npb25zL2xpYi9idWlsdGluRnVuY3Rpb25zL3JvdW5kLmpzIn0=