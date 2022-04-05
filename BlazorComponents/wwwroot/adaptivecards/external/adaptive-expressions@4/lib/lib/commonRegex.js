"use strict";var __importDefault=this&&this.__importDefault||function(mod){return mod&&mod.__esModule?mod:{default:mod}};Object.defineProperty(exports,"__esModule",{value:!0});const antlr4ts_1=require(350),lru_cache_1=__importDefault(require(429)),generated_1=require(199),regexErrorListener_1=require(212);class CommonRegex{static CreateRegex(pattern){let result;if(pattern&&this.regexCache.has(pattern))result=this.regexCache.get(pattern);else{if(!pattern||!this.isCommonRegex(pattern))throw new Error(`'${pattern}' is not a valid regex.`);result=this.getRegExpFromString(pattern),this.regexCache.set(pattern,result)}return result}static getRegExpFromString(pattern){let regexp,flag="";return["(?i)","(?m)","(?s)"].forEach(e=>{pattern.includes(e)&&(flag+=e.substr(2,1),pattern=pattern.replace(e,""))}),regexp=flag?new RegExp(`${pattern}`,flag):new RegExp(`${pattern}`)}static isCommonRegex(pattern){try{this.antlrParse(pattern)}catch(Exception){return!1}return!0}static antlrParse(pattern){const inputStream=new antlr4ts_1.ANTLRInputStream(pattern),lexer=new generated_1.CommonRegexLexer(inputStream);lexer.removeErrorListeners();const tokenStream=new antlr4ts_1.CommonTokenStream(lexer),parser=new generated_1.CommonRegexParser(tokenStream);return parser.removeErrorListeners(),parser.addErrorListener(regexErrorListener_1.RegexErrorListener.Instance),parser.buildParseTree=!0,parser.parse()}}CommonRegex.regexCache=new lru_cache_1.default(15),exports.CommonRegex=CommonRegex;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbW1vblJlZ2V4LmpzIl0sIm5hbWVzIjpbIl9faW1wb3J0RGVmYXVsdCIsInRoaXMiLCJtb2QiLCJfX2VzTW9kdWxlIiwiZGVmYXVsdCIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZXhwb3J0cyIsInZhbHVlIiwiYW50bHI0dHNfMSIsInJlcXVpcmUiLCJscnVfY2FjaGVfMSIsImdlbmVyYXRlZF8xIiwicmVnZXhFcnJvckxpc3RlbmVyXzEiLCJDb21tb25SZWdleCIsIltvYmplY3QgT2JqZWN0XSIsInBhdHRlcm4iLCJyZXN1bHQiLCJyZWdleENhY2hlIiwiaGFzIiwiZ2V0IiwiaXNDb21tb25SZWdleCIsIkVycm9yIiwiZ2V0UmVnRXhwRnJvbVN0cmluZyIsInNldCIsInJlZ2V4cCIsImZsYWciLCJmb3JFYWNoIiwiZSIsImluY2x1ZGVzIiwic3Vic3RyIiwicmVwbGFjZSIsIlJlZ0V4cCIsImFudGxyUGFyc2UiLCJFeGNlcHRpb24iLCJpbnB1dFN0cmVhbSIsIkFOVExSSW5wdXRTdHJlYW0iLCJsZXhlciIsIkNvbW1vblJlZ2V4TGV4ZXIiLCJyZW1vdmVFcnJvckxpc3RlbmVycyIsInRva2VuU3RyZWFtIiwiQ29tbW9uVG9rZW5TdHJlYW0iLCJwYXJzZXIiLCJDb21tb25SZWdleFBhcnNlciIsImFkZEVycm9yTGlzdGVuZXIiLCJSZWdleEVycm9yTGlzdGVuZXIiLCJJbnN0YW5jZSIsImJ1aWxkUGFyc2VUcmVlIiwicGFyc2UiXSwibWFwcGluZ3MiOiJBQUFBLGFBQ0EsSUFBSUEsZ0JBQW1CQyxNQUFRQSxLQUFLRCxpQkFBb0IsU0FBVUUsS0FDOUQsT0FBUUEsS0FBT0EsSUFBSUMsV0FBY0QsSUFBTSxDQUFFRSxRQUFXRixNQUV4REcsT0FBT0MsZUFBZUMsUUFBUyxhQUFjLENBQUVDLE9BQU8sSUFTdEQsTUFBTUMsV0FBYUMsUUFBUSxZQUNyQkMsWUFBY1gsZ0JBQWdCVSxRQUFRLGNBQ3RDRSxZQUFjRixRQUFRLGVBQ3RCRyxxQkFBdUJILFFBQVEsd0JBT3JDLE1BQU1JLFlBTUZDLG1CQUFtQkMsU0FDZixJQUFJQyxPQUNKLEdBQUlELFNBQVdmLEtBQUtpQixXQUFXQyxJQUFJSCxTQUMvQkMsT0FBU2hCLEtBQUtpQixXQUFXRSxJQUFJSixhQUU1QixDQUNELElBQUtBLFVBQVlmLEtBQUtvQixjQUFjTCxTQUNoQyxNQUFNLElBQUlNLFVBQVVOLGtDQUV4QkMsT0FBU2hCLEtBQUtzQixvQkFBb0JQLFNBQ2xDZixLQUFLaUIsV0FBV00sSUFBSVIsUUFBU0MsUUFFakMsT0FBT0EsT0FLWEYsMkJBQTJCQyxTQUV2QixJQU9JUyxPQVBBQyxLQUFPLEdBY1gsTUFmYyxDQUFDLE9BQVEsT0FBUSxRQUV6QkMsUUFBU0MsSUFDUFosUUFBUWEsU0FBU0QsS0FDakJGLE1BQVFFLEVBQUVFLE9BQU8sRUFBRyxHQUNwQmQsUUFBVUEsUUFBUWUsUUFBUUgsRUFBRyxPQUtqQ0gsT0FEQUMsS0FDUyxJQUFJTSxVQUFVaEIsVUFBV1UsTUFHekIsSUFBSU0sVUFBVWhCLFdBTy9CRCxxQkFBcUJDLFNBQ2pCLElBQ0lmLEtBQUtnQyxXQUFXakIsU0FFcEIsTUFBT2tCLFdBQ0gsT0FBTyxFQUVYLE9BQU8sRUFLWG5CLGtCQUFrQkMsU0FDZCxNQUFNbUIsWUFBYyxJQUFJMUIsV0FBVzJCLGlCQUFpQnBCLFNBQzlDcUIsTUFBUSxJQUFJekIsWUFBWTBCLGlCQUFpQkgsYUFDL0NFLE1BQU1FLHVCQUNOLE1BQU1DLFlBQWMsSUFBSS9CLFdBQVdnQyxrQkFBa0JKLE9BQy9DSyxPQUFTLElBQUk5QixZQUFZK0Isa0JBQWtCSCxhQUtqRCxPQUpBRSxPQUFPSCx1QkFFUEcsT0FBT0UsaUJBQWlCL0IscUJBQXFCZ0MsbUJBQW1CQyxVQUNoRUosT0FBT0ssZ0JBQWlCLEVBQ2pCTCxPQUFPTSxTQUd0QmxDLFlBQVlJLFdBQWEsSUFBSVAsWUFBWVAsUUFBUSxJQUNqREcsUUFBUU8sWUFBY0EiLCJmaWxlIjoiL2hvbWUvdnN0cy93b3JrLzEvcy9saWJyYXJpZXMvYWRhcHRpdmUtZXhwcmVzc2lvbnMvbGliL2NvbW1vblJlZ2V4LmpzIn0=