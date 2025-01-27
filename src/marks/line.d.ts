import type {ChannelValue, ChannelValueDenseBinSpec, ChannelValueSpec} from "../channel.js";
import type {CurveAutoOptions} from "../curve.js";
import type {Data, MarkOptions, RenderableMark} from "../mark.js";
import type {MarkerOptions} from "../marker.js";
import type {BinOptions, BinReducer} from "../transforms/bin.js";

export interface LineOptions extends MarkOptions, MarkerOptions, CurveAutoOptions {
  x?: ChannelValueSpec;
  y?: ChannelValueSpec;
  z?: ChannelValue;
}

export interface LineXOptions extends LineOptions, BinOptions {
  y?: ChannelValueDenseBinSpec;
  reduce?: BinReducer;
}

export interface LineYOptions extends LineOptions, BinOptions {
  x?: ChannelValueDenseBinSpec;
  reduce?: BinReducer;
}

export function line(data?: Data, options?: LineOptions): Line;

export function lineX(data?: Data, options?: LineXOptions): Line;

export function lineY(data?: Data, options?: LineYOptions): Line;

export class Line extends RenderableMark {}
