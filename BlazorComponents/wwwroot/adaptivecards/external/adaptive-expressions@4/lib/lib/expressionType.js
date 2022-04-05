"use strict";Object.defineProperty(exports,"__esModule",{value:!0});class ExpressionType{}ExpressionType.Add="+",ExpressionType.Subtract="-",ExpressionType.Multiply="*",ExpressionType.Divide="/",ExpressionType.Min="min",ExpressionType.Max="max",ExpressionType.Power="^",ExpressionType.Mod="%",ExpressionType.Average="average",ExpressionType.Sum="sum",ExpressionType.Count="count",ExpressionType.Range="range",ExpressionType.Floor="floor",ExpressionType.Ceiling="ceiling",ExpressionType.Round="round",ExpressionType.Abs="abs",ExpressionType.Sqrt="sqrt",ExpressionType.LessThan="<",ExpressionType.LessThanOrEqual="<=",ExpressionType.Equal="==",ExpressionType.NotEqual="!=",ExpressionType.GreaterThan=">",ExpressionType.GreaterThanOrEqual=">=",ExpressionType.Exists="exists",ExpressionType.Contains="contains",ExpressionType.Empty="empty",ExpressionType.And="&&",ExpressionType.Or="||",ExpressionType.Not="!",ExpressionType.Concat="concat",ExpressionType.Length="length",ExpressionType.Replace="replace",ExpressionType.ReplaceIgnoreCase="replaceIgnoreCase",ExpressionType.Split="split",ExpressionType.Substring="substring",ExpressionType.ToLower="toLower",ExpressionType.ToUpper="toUpper",ExpressionType.Trim="trim",ExpressionType.Join="join",ExpressionType.EndsWith="endsWith",ExpressionType.StartsWith="startsWith",ExpressionType.CountWord="countWord",ExpressionType.AddOrdinal="addOrdinal",ExpressionType.NewGuid="newGuid",ExpressionType.IndexOf="indexOf",ExpressionType.LastIndexOf="lastIndexOf",ExpressionType.EOL="EOL",ExpressionType.SentenceCase="sentenceCase",ExpressionType.TitleCase="titleCase",ExpressionType.AddDays="addDays",ExpressionType.AddHours="addHours",ExpressionType.AddMinutes="addMinutes",ExpressionType.AddSeconds="addSeconds",ExpressionType.DayOfMonth="dayOfMonth",ExpressionType.DayOfWeek="dayOfWeek",ExpressionType.DayOfYear="dayOfYear",ExpressionType.Month="month",ExpressionType.Date="date",ExpressionType.Year="year",ExpressionType.UtcNow="utcNow",ExpressionType.FormatDateTime="formatDateTime",ExpressionType.FormatEpoch="formatEpoch",ExpressionType.FormatTicks="formatTicks",ExpressionType.SubtractFromTime="subtractFromTime",ExpressionType.DateReadBack="dateReadBack",ExpressionType.GetTimeOfDay="getTimeOfDay",ExpressionType.GetFutureTime="getFutureTime",ExpressionType.GetPastTime="getPastTime",ExpressionType.ConvertFromUTC="convertFromUTC",ExpressionType.ConvertToUTC="convertToUTC",ExpressionType.AddToTime="addToTime",ExpressionType.StartOfDay="startOfDay",ExpressionType.StartOfHour="startOfHour",ExpressionType.StartOfMonth="startOfMonth",ExpressionType.Ticks="ticks",ExpressionType.TicksToDays="ticksToDays",ExpressionType.TicksToHours="ticksToHours",ExpressionType.TicksToMinutes="ticksToMinutes",ExpressionType.DateTimeDiff="dateTimeDiff",ExpressionType.IsDefinite="isDefinite",ExpressionType.IsTime="isTime",ExpressionType.IsDuration="isDuration",ExpressionType.IsDate="isDate",ExpressionType.IsTimeRange="isTimeRange",ExpressionType.IsDateRange="isDateRange",ExpressionType.IsPresent="isPresent",ExpressionType.GetNextViableDate="getNextViableDate",ExpressionType.GetPreviousViableDate="getPreviousViableDate",ExpressionType.GetNextViableTime="getNextViableTime",ExpressionType.GetPreviousViableTime="getPreviousViableTime",ExpressionType.TimexResolve="resolve",ExpressionType.Float="float",ExpressionType.Int="int",ExpressionType.String="string",ExpressionType.Bool="bool",ExpressionType.Binary="binary",ExpressionType.Base64="base64",ExpressionType.Base64ToBinary="base64ToBinary",ExpressionType.Base64ToString="base64ToString",ExpressionType.DataUri="dataUri",ExpressionType.DataUriToBinary="dataUriToBinary",ExpressionType.DataUriToString="dataUriToString",ExpressionType.UriComponent="uriComponent",ExpressionType.UriComponentToString="uriComponentToString",ExpressionType.FormatNumber="formatNumber",ExpressionType.JsonStringify="jsonStringify",ExpressionType.Accessor="Accessor",ExpressionType.Element="Element",ExpressionType.CreateArray="createArray",ExpressionType.First="first",ExpressionType.Last="last",ExpressionType.Foreach="foreach",ExpressionType.Select="select",ExpressionType.Where="where",ExpressionType.Union="union",ExpressionType.Intersection="intersection",ExpressionType.Skip="skip",ExpressionType.Take="take",ExpressionType.FilterNotEqual="filterNotEqual",ExpressionType.SubArray="subArray",ExpressionType.SortBy="sortBy",ExpressionType.SortByDescending="sortByDescending",ExpressionType.IndicesAndValues="indicesAndValues",ExpressionType.Flatten="flatten",ExpressionType.Unique="unique",ExpressionType.Reverse="reverse",ExpressionType.Any="any",ExpressionType.All="all",ExpressionType.Constant="Constant",ExpressionType.Lambda="Lambda",ExpressionType.If="if",ExpressionType.Rand="rand",ExpressionType.Json="json",ExpressionType.AddProperty="addProperty",ExpressionType.RemoveProperty="removeProperty",ExpressionType.SetProperty="setProperty",ExpressionType.GetProperty="getProperty",ExpressionType.Coalesce="coalesce",ExpressionType.JPath="jPath",ExpressionType.SetPathToValue="setPathToValue",ExpressionType.Merge="merge",ExpressionType.XML="xml",ExpressionType.XPath="xPath",ExpressionType.UriHost="uriHost",ExpressionType.UriPath="uriPath",ExpressionType.UriPathAndQuery="uriPathAndQuery",ExpressionType.UriPort="uriPort",ExpressionType.UriQuery="uriQuery",ExpressionType.UriScheme="uriScheme",ExpressionType.IsMatch="isMatch",ExpressionType.IsString="isString",ExpressionType.IsInteger="isInteger",ExpressionType.IsArray="isArray",ExpressionType.IsObject="isObject",ExpressionType.IsFloat="isFloat",ExpressionType.IsDateTime="isDateTime",ExpressionType.IsBoolean="isBoolean",ExpressionType.StringOrValue="stringOrValue",ExpressionType.Ignore="ignore",ExpressionType.Optional="optional",exports.ExpressionType=ExpressionType;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4cHJlc3Npb25UeXBlLmpzIl0sIm5hbWVzIjpbIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZXhwb3J0cyIsInZhbHVlIiwiRXhwcmVzc2lvblR5cGUiLCJBZGQiLCJTdWJ0cmFjdCIsIk11bHRpcGx5IiwiRGl2aWRlIiwiTWluIiwiTWF4IiwiUG93ZXIiLCJNb2QiLCJBdmVyYWdlIiwiU3VtIiwiQ291bnQiLCJSYW5nZSIsIkZsb29yIiwiQ2VpbGluZyIsIlJvdW5kIiwiQWJzIiwiU3FydCIsIkxlc3NUaGFuIiwiTGVzc1RoYW5PckVxdWFsIiwiRXF1YWwiLCJOb3RFcXVhbCIsIkdyZWF0ZXJUaGFuIiwiR3JlYXRlclRoYW5PckVxdWFsIiwiRXhpc3RzIiwiQ29udGFpbnMiLCJFbXB0eSIsIkFuZCIsIk9yIiwiTm90IiwiQ29uY2F0IiwiTGVuZ3RoIiwiUmVwbGFjZSIsIlJlcGxhY2VJZ25vcmVDYXNlIiwiU3BsaXQiLCJTdWJzdHJpbmciLCJUb0xvd2VyIiwiVG9VcHBlciIsIlRyaW0iLCJKb2luIiwiRW5kc1dpdGgiLCJTdGFydHNXaXRoIiwiQ291bnRXb3JkIiwiQWRkT3JkaW5hbCIsIk5ld0d1aWQiLCJJbmRleE9mIiwiTGFzdEluZGV4T2YiLCJFT0wiLCJTZW50ZW5jZUNhc2UiLCJUaXRsZUNhc2UiLCJBZGREYXlzIiwiQWRkSG91cnMiLCJBZGRNaW51dGVzIiwiQWRkU2Vjb25kcyIsIkRheU9mTW9udGgiLCJEYXlPZldlZWsiLCJEYXlPZlllYXIiLCJNb250aCIsIkRhdGUiLCJZZWFyIiwiVXRjTm93IiwiRm9ybWF0RGF0ZVRpbWUiLCJGb3JtYXRFcG9jaCIsIkZvcm1hdFRpY2tzIiwiU3VidHJhY3RGcm9tVGltZSIsIkRhdGVSZWFkQmFjayIsIkdldFRpbWVPZkRheSIsIkdldEZ1dHVyZVRpbWUiLCJHZXRQYXN0VGltZSIsIkNvbnZlcnRGcm9tVVRDIiwiQ29udmVydFRvVVRDIiwiQWRkVG9UaW1lIiwiU3RhcnRPZkRheSIsIlN0YXJ0T2ZIb3VyIiwiU3RhcnRPZk1vbnRoIiwiVGlja3MiLCJUaWNrc1RvRGF5cyIsIlRpY2tzVG9Ib3VycyIsIlRpY2tzVG9NaW51dGVzIiwiRGF0ZVRpbWVEaWZmIiwiSXNEZWZpbml0ZSIsIklzVGltZSIsIklzRHVyYXRpb24iLCJJc0RhdGUiLCJJc1RpbWVSYW5nZSIsIklzRGF0ZVJhbmdlIiwiSXNQcmVzZW50IiwiR2V0TmV4dFZpYWJsZURhdGUiLCJHZXRQcmV2aW91c1ZpYWJsZURhdGUiLCJHZXROZXh0VmlhYmxlVGltZSIsIkdldFByZXZpb3VzVmlhYmxlVGltZSIsIlRpbWV4UmVzb2x2ZSIsIkZsb2F0IiwiSW50IiwiU3RyaW5nIiwiQm9vbCIsIkJpbmFyeSIsIkJhc2U2NCIsIkJhc2U2NFRvQmluYXJ5IiwiQmFzZTY0VG9TdHJpbmciLCJEYXRhVXJpIiwiRGF0YVVyaVRvQmluYXJ5IiwiRGF0YVVyaVRvU3RyaW5nIiwiVXJpQ29tcG9uZW50IiwiVXJpQ29tcG9uZW50VG9TdHJpbmciLCJGb3JtYXROdW1iZXIiLCJKc29uU3RyaW5naWZ5IiwiQWNjZXNzb3IiLCJFbGVtZW50IiwiQ3JlYXRlQXJyYXkiLCJGaXJzdCIsIkxhc3QiLCJGb3JlYWNoIiwiU2VsZWN0IiwiV2hlcmUiLCJVbmlvbiIsIkludGVyc2VjdGlvbiIsIlNraXAiLCJUYWtlIiwiRmlsdGVyTm90RXF1YWwiLCJTdWJBcnJheSIsIlNvcnRCeSIsIlNvcnRCeURlc2NlbmRpbmciLCJJbmRpY2VzQW5kVmFsdWVzIiwiRmxhdHRlbiIsIlVuaXF1ZSIsIlJldmVyc2UiLCJBbnkiLCJBbGwiLCJDb25zdGFudCIsIkxhbWJkYSIsIklmIiwiUmFuZCIsIkpzb24iLCJBZGRQcm9wZXJ0eSIsIlJlbW92ZVByb3BlcnR5IiwiU2V0UHJvcGVydHkiLCJHZXRQcm9wZXJ0eSIsIkNvYWxlc2NlIiwiSlBhdGgiLCJTZXRQYXRoVG9WYWx1ZSIsIk1lcmdlIiwiWE1MIiwiWFBhdGgiLCJVcmlIb3N0IiwiVXJpUGF0aCIsIlVyaVBhdGhBbmRRdWVyeSIsIlVyaVBvcnQiLCJVcmlRdWVyeSIsIlVyaVNjaGVtZSIsIklzTWF0Y2giLCJJc1N0cmluZyIsIklzSW50ZWdlciIsIklzQXJyYXkiLCJJc09iamVjdCIsIklzRmxvYXQiLCJJc0RhdGVUaW1lIiwiSXNCb29sZWFuIiwiU3RyaW5nT3JWYWx1ZSIsIklnbm9yZSIsIk9wdGlvbmFsIl0sIm1hcHBpbmdzIjoiQUFBQSxhQVFBQSxPQUFPQyxlQUFlQyxRQUFTLGFBQWMsQ0FBRUMsT0FBTyxJQUl0RCxNQUFNQyxnQkFHTkEsZUFBZUMsSUFBTSxJQUNyQkQsZUFBZUUsU0FBVyxJQUMxQkYsZUFBZUcsU0FBVyxJQUMxQkgsZUFBZUksT0FBUyxJQUN4QkosZUFBZUssSUFBTSxNQUNyQkwsZUFBZU0sSUFBTSxNQUNyQk4sZUFBZU8sTUFBUSxJQUN2QlAsZUFBZVEsSUFBTSxJQUNyQlIsZUFBZVMsUUFBVSxVQUN6QlQsZUFBZVUsSUFBTSxNQUNyQlYsZUFBZVcsTUFBUSxRQUN2QlgsZUFBZVksTUFBUSxRQUN2QlosZUFBZWEsTUFBUSxRQUN2QmIsZUFBZWMsUUFBVSxVQUN6QmQsZUFBZWUsTUFBUSxRQUN2QmYsZUFBZWdCLElBQU0sTUFDckJoQixlQUFlaUIsS0FBTyxPQUV0QmpCLGVBQWVrQixTQUFXLElBQzFCbEIsZUFBZW1CLGdCQUFrQixLQUNqQ25CLGVBQWVvQixNQUFRLEtBQ3ZCcEIsZUFBZXFCLFNBQVcsS0FDMUJyQixlQUFlc0IsWUFBYyxJQUM3QnRCLGVBQWV1QixtQkFBcUIsS0FDcEN2QixlQUFld0IsT0FBUyxTQUN4QnhCLGVBQWV5QixTQUFXLFdBQzFCekIsZUFBZTBCLE1BQVEsUUFFdkIxQixlQUFlMkIsSUFBTSxLQUNyQjNCLGVBQWU0QixHQUFLLEtBQ3BCNUIsZUFBZTZCLElBQU0sSUFFckI3QixlQUFlOEIsT0FBUyxTQUN4QjlCLGVBQWUrQixPQUFTLFNBQ3hCL0IsZUFBZWdDLFFBQVUsVUFDekJoQyxlQUFlaUMsa0JBQW9CLG9CQUNuQ2pDLGVBQWVrQyxNQUFRLFFBQ3ZCbEMsZUFBZW1DLFVBQVks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QUFtQixtQkFDbEMzSCxlQUFlNEgsUUFBVSxVQUN6QjVILGVBQWU2SCxPQUFTLFNBQ3hCN0gsZUFBZThILFFBQVUsVUFDekI5SCxlQUFlK0gsSUFBTSxNQUNyQi9ILGVBQWVnSSxJQUFNLE1BRXJCaEksZUFBZWlJLFNBQVcsV0FDMUJqSSxlQUFla0ksT0FBUyxTQUN4QmxJLGVBQWVtSSxHQUFLLEtBQ3BCbkksZUFBZW9JLEtBQU8sT0FFdEJwSSxlQUFlcUksS0FBTyxPQUN0QnJJLGVBQWVzSSxZQUFjLGNBQzdCdEksZUFBZXVJLGVBQWlCLGlCQUNoQ3ZJLGVBQWV3SSxZQUFjLGNBQzdCeEksZUFBZXlJLFlBQWMsY0FDN0J6SSxlQUFlMEksU0FBVyxXQUMxQjFJLGVBQWUySSxNQUFRLFFBQ3ZCM0ksZUFBZTRJLGVBQWlCLGlCQUNoQzVJLGVBQWU2SSxNQUFRLFFBQ3ZCN0ksZUFBZThJLElBQU0sTUFDckI5SSxlQUFlK0ksTUFBUSxRQUV2Qi9JLGVBQWVnSixRQUFVLFVBQ3pCaEosZUFBZWlKLFFBQVUsVUFDekJqSixlQUFla0osZ0JBQWtCLGtCQUNqQ2xKLGVBQWVtSixRQUFVLFVBQ3pCbkosZUFBZW9KLFNBQVcsV0FDMUJwSixlQUFlcUosVUFBWSxZQUUzQnJKLGVBQWVzSixRQUFVLFVBRXpCdEosZUFBZXVKLFNBQVcsV0FDMUJ2SixlQUFld0osVUFBWSxZQUMzQnhKLGVBQWV5SixRQUFVLFVBQ3pCekosZUFBZTBKLFNBQVcsV0FDMUIxSixlQUFlMkosUUFBVSxVQUN6QjNKLGVBQWU0SixXQUFhLGFBQzVCNUosZUFBZTZKLFVBQVksWUFFM0I3SixlQUFlOEosY0FBZ0IsZ0JBQy9COUosZUFBZStKLE9BQVMsU0FDeEIvSixlQUFlZ0ssU0FBVyxXQUMxQmxLLFFBQVFFLGVBQWlCQSIsImZpbGUiOiIvaG9tZS92c3RzL3dvcmsvMS9zL2xpYnJhcmllcy9hZGFwdGl2ZS1leHByZXNzaW9ucy9saWIvZXhwcmVzc2lvblR5cGUuanMifQ==