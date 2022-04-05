"use strict";Object.defineProperty(exports,"__esModule",{value:!0});const expressionEvaluator_1=require(180),expressionType_1=require(192),functionUtils_1=require(196),returnType_1=require(213);class AddOrdinal extends expressionEvaluator_1.ExpressionEvaluator{constructor(){super(expressionType_1.ExpressionType.AddOrdinal,AddOrdinal.evaluator(),returnType_1.ReturnType.String,AddOrdinal.validator)}static evaluator(){return functionUtils_1.FunctionUtils.apply(args=>AddOrdinal.evalAddOrdinal(args[0]),functionUtils_1.FunctionUtils.verifyInteger)}static evalAddOrdinal(num){let hasResult=!1,ordinalResult=num.toString();if(num>0){switch(num%100){case 11:case 12:case 13:ordinalResult+="th",hasResult=!0}if(!hasResult)switch(num%10){case 1:ordinalResult+="st";break;case 2:ordinalResult+="nd";break;case 3:ordinalResult+="rd";break;default:ordinalResult+="th"}}return ordinalResult}static validator(expression){functionUtils_1.FunctionUtils.validateArityAndAnyType(expression,1,1,returnType_1.ReturnType.Number)}}exports.AddOrdinal=AddOrdinal;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkZE9yZGluYWwuanMiXSwibmFtZXMiOlsiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJleHBvcnRzIiwidmFsdWUiLCJleHByZXNzaW9uRXZhbHVhdG9yXzEiLCJyZXF1aXJlIiwiZXhwcmVzc2lvblR5cGVfMSIsImZ1bmN0aW9uVXRpbHNfMSIsInJldHVyblR5cGVfMSIsIkFkZE9yZGluYWwiLCJFeHByZXNzaW9uRXZhbHVhdG9yIiwiW29iamVjdCBPYmplY3RdIiwic3VwZXIiLCJFeHByZXNzaW9uVHlwZSIsImV2YWx1YXRvciIsIlJldHVyblR5cGUiLCJTdHJpbmciLCJ2YWxpZGF0b3IiLCJGdW5jdGlvblV0aWxzIiwiYXBwbHkiLCJhcmdzIiwiZXZhbEFkZE9yZGluYWwiLCJ2ZXJpZnlJbnRlZ2VyIiwibnVtIiwiaGFzUmVzdWx0Iiwib3JkaW5hbFJlc3VsdCIsInRvU3RyaW5nIiwiZXhwcmVzc2lvbiIsInZhbGlkYXRlQXJpdHlBbmRBbnlUeXBlIiwiTnVtYmVyIl0sIm1hcHBpbmdzIjoiQUFBQSxhQVFBQSxPQUFPQyxlQUFlQyxRQUFTLGFBQWMsQ0FBRUMsT0FBTyxJQUN0RCxNQUFNQyxzQkFBd0JDLFFBQVEsMEJBQ2hDQyxpQkFBbUJELFFBQVEscUJBQzNCRSxnQkFBa0JGLFFBQVEsb0JBQzFCRyxhQUFlSCxRQUFRLGlCQUk3QixNQUFNSSxtQkFBbUJMLHNCQUFzQk0sb0JBSTNDQyxjQUNJQyxNQUFNTixpQkFBaUJPLGVBQWVKLFdBQVlBLFdBQVdLLFlBQWFOLGFBQWFPLFdBQVdDLE9BQVFQLFdBQVdRLFdBS3pITixtQkFDSSxPQUFPSixnQkFBZ0JXLGNBQWNDLE1BQU9DLE1BQVNYLFdBQVdZLGVBQWVELEtBQUssSUFBS2IsZ0JBQWdCVyxjQUFjSSxlQUszSFgsc0JBQXNCWSxLQUNsQixJQUFJQyxXQUFZLEVBQ1pDLGNBQWdCRixJQUFJRyxXQUN4QixHQUFJSCxJQUFNLEVBQUcsQ0FDVCxPQUFRQSxJQUFNLEtBQ1YsS0FBSyxHQUNMLEtBQUssR0FDTCxLQUFLLEdBQ0RFLGVBQWlCLEtBQ2pCRCxXQUFZLEVBS3BCLElBQUtBLFVBQ0QsT0FBUUQsSUFBTSxJQUNWLEtBQUssRUFDREUsZUFBaUIsS0FDakIsTUFDSixLQUFLLEVBQ0RBLGVBQWlCLEtBQ2pCLE1BQ0osS0FBSyxFQUNEQSxlQUFpQixLQUNqQixNQUNKLFFBQ0lBLGVBQWlCLE1BS2pDLE9BQU9BLGNBS1hkLGlCQUFpQmdCLFlBQ2JwQixnQkFBZ0JXLGNBQWNVLHdCQUF3QkQsV0FBWSxFQUFHLEVBQUduQixhQUFhTyxXQUFXYyxTQUd4RzNCLFFBQVFPLFdBQWFBIiwiZmlsZSI6Ii9ob21lL3ZzdHMvd29yay8xL3MvbGlicmFyaWVzL2FkYXB0aXZlLWV4cHJlc3Npb25zL2xpYi9idWlsdGluRnVuY3Rpb25zL2FkZE9yZGluYWwuanMifQ==