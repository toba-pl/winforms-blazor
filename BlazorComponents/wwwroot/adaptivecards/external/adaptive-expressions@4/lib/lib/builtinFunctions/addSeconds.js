"use strict";Object.defineProperty(exports,"__esModule",{value:!0});const expressionType_1=require(192),timeTransformEvaluator_1=require(145);exports.AddSeconds=class extends timeTransformEvaluator_1.TimeTransformEvaluator{constructor(){super(expressionType_1.ExpressionType.AddSeconds,(ts,num)=>{const newDate=new Date(ts);return newDate.setSeconds(ts.getSeconds()+num),newDate})}};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkZFNlY29uZHMuanMiXSwibmFtZXMiOlsiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJleHBvcnRzIiwidmFsdWUiLCJleHByZXNzaW9uVHlwZV8xIiwicmVxdWlyZSIsInRpbWVUcmFuc2Zvcm1FdmFsdWF0b3JfMSIsIkFkZFNlY29uZHMiLCJUaW1lVHJhbnNmb3JtRXZhbHVhdG9yIiwiW29iamVjdCBPYmplY3RdIiwic3VwZXIiLCJFeHByZXNzaW9uVHlwZSIsInRzIiwibnVtIiwibmV3RGF0ZSIsIkRhdGUiLCJzZXRTZWNvbmRzIiwiZ2V0U2Vjb25kcyJdLCJtYXBwaW5ncyI6IkFBQUEsYUFRQUEsT0FBT0MsZUFBZUMsUUFBUyxhQUFjLENBQUVDLE9BQU8sSUFDdEQsTUFBTUMsaUJBQW1CQyxRQUFRLHFCQUMzQkMseUJBQTJCRCxRQUFRLDRCQWdCekNILFFBQVFLLFdBWlIsY0FBeUJELHlCQUF5QkUsdUJBSTlDQyxjQUNJQyxNQUFNTixpQkFBaUJPLGVBQWVKLFdBQVksQ0FBQ0ssR0FBSUMsT0FDbkQsTUFBTUMsUUFBVSxJQUFJQyxLQUFLSCxJQUV6QixPQURBRSxRQUFRRSxXQUFXSixHQUFHSyxhQUFlSixLQUM5QkMiLCJmaWxlIjoiL2hvbWUvdnN0cy93b3JrLzEvcy9saWJyYXJpZXMvYWRhcHRpdmUtZXhwcmVzc2lvbnMvbGliL2J1aWx0aW5GdW5jdGlvbnMvYWRkU2Vjb25kcy5qcyJ9