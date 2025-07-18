// automatically generated by the FlatBuffers compiler, do not modify

/* eslint-disable @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any, @typescript-eslint/no-non-null-assertion */

import * as flatbuffers from 'flatbuffers';

import { A, AT } from '../union-underlying-type/a.js';
import { ABC, unionToAbc, unionListToAbc } from '../union-underlying-type/abc.js';
import { B, BT } from '../union-underlying-type/b.js';
import { C, CT } from '../union-underlying-type/c.js';


export class D implements flatbuffers.IUnpackableObject<DT> {
  bb: flatbuffers.ByteBuffer|null = null;
  bb_pos = 0;
  __init(i:number, bb:flatbuffers.ByteBuffer):D {
  this.bb_pos = i;
  this.bb = bb;
  return this;
}

static getRootAsD(bb:flatbuffers.ByteBuffer, obj?:D):D {
  return (obj || new D()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

static getSizePrefixedRootAsD(bb:flatbuffers.ByteBuffer, obj?:D):D {
  bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
  return (obj || new D()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

testUnionType():ABC {
  const offset = this.bb!.__offset(this.bb_pos, 4);
  return offset ? this.bb!.readInt32(this.bb_pos + offset) : ABC.NONE;
}

testUnion<T extends flatbuffers.Table>(obj:any):any|null {
  const offset = this.bb!.__offset(this.bb_pos, 6);
  return offset ? this.bb!.__union(obj, this.bb_pos + offset) : null;
}

testVectorOfUnionType(index: number):ABC|null {
  const offset = this.bb!.__offset(this.bb_pos, 8);
  return offset ? this.bb!.readInt32(this.bb!.__vector(this.bb_pos + offset) + index * 4) : null;
}

testVectorOfUnionTypeLength():number {
  const offset = this.bb!.__offset(this.bb_pos, 8);
  return offset ? this.bb!.__vector_len(this.bb_pos + offset) : 0;
}

testVectorOfUnionTypeArray():Int32Array|null {
  const offset = this.bb!.__offset(this.bb_pos, 8);
  return offset ? new Int32Array(this.bb!.bytes().buffer, this.bb!.bytes().byteOffset + this.bb!.__vector(this.bb_pos + offset), this.bb!.__vector_len(this.bb_pos + offset)) : null;
}

testVectorOfUnion(index: number, obj:any):any|null {
  const offset = this.bb!.__offset(this.bb_pos, 10);
  return offset ? this.bb!.__union(obj, this.bb!.__vector(this.bb_pos + offset) + index * 4) : null;
}

testVectorOfUnionLength():number {
  const offset = this.bb!.__offset(this.bb_pos, 10);
  return offset ? this.bb!.__vector_len(this.bb_pos + offset) : 0;
}

static getFullyQualifiedName():string {
  return 'UnionUnderlyingType.D';
}

static startD(builder:flatbuffers.Builder) {
  builder.startObject(4);
}

static addTestUnionType(builder:flatbuffers.Builder, testUnionType:ABC) {
  builder.addFieldInt32(0, testUnionType, ABC.NONE);
}

static addTestUnion(builder:flatbuffers.Builder, testUnionOffset:flatbuffers.Offset) {
  builder.addFieldOffset(1, testUnionOffset, 0);
}

static addTestVectorOfUnionType(builder:flatbuffers.Builder, testVectorOfUnionTypeOffset:flatbuffers.Offset) {
  builder.addFieldOffset(2, testVectorOfUnionTypeOffset, 0);
}

static createTestVectorOfUnionTypeVector(builder:flatbuffers.Builder, data:ABC[]):flatbuffers.Offset {
  builder.startVector(4, data.length, 4);
  for (let i = data.length - 1; i >= 0; i--) {
    builder.addInt32(data[i]!);
  }
  return builder.endVector();
}

static startTestVectorOfUnionTypeVector(builder:flatbuffers.Builder, numElems:number) {
  builder.startVector(4, numElems, 4);
}

static addTestVectorOfUnion(builder:flatbuffers.Builder, testVectorOfUnionOffset:flatbuffers.Offset) {
  builder.addFieldOffset(3, testVectorOfUnionOffset, 0);
}

static createTestVectorOfUnionVector(builder:flatbuffers.Builder, data:flatbuffers.Offset[]):flatbuffers.Offset {
  builder.startVector(4, data.length, 4);
  for (let i = data.length - 1; i >= 0; i--) {
    builder.addOffset(data[i]!);
  }
  return builder.endVector();
}

static startTestVectorOfUnionVector(builder:flatbuffers.Builder, numElems:number) {
  builder.startVector(4, numElems, 4);
}

static endD(builder:flatbuffers.Builder):flatbuffers.Offset {
  const offset = builder.endObject();
  return offset;
}

static createD(builder:flatbuffers.Builder, testUnionType:ABC, testUnionOffset:flatbuffers.Offset, testVectorOfUnionTypeOffset:flatbuffers.Offset, testVectorOfUnionOffset:flatbuffers.Offset):flatbuffers.Offset {
  D.startD(builder);
  D.addTestUnionType(builder, testUnionType);
  D.addTestUnion(builder, testUnionOffset);
  D.addTestVectorOfUnionType(builder, testVectorOfUnionTypeOffset);
  D.addTestVectorOfUnion(builder, testVectorOfUnionOffset);
  return D.endD(builder);
}

unpack(): DT {
  return new DT(
    this.testUnionType(),
    (() => {
      const temp = unionToAbc(this.testUnionType(), this.testUnion.bind(this));
      if(temp === null) { return null; }
      return temp.unpack()
  })(),
    this.bb!.createScalarList<ABC>(this.testVectorOfUnionType.bind(this), this.testVectorOfUnionTypeLength()),
    (() => {
    const ret: (AT|BT|CT)[] = [];
    for(let targetEnumIndex = 0; targetEnumIndex < this.testVectorOfUnionTypeLength(); ++targetEnumIndex) {
      const targetEnum = this.testVectorOfUnionType(targetEnumIndex);
      if(targetEnum === null || ABC[targetEnum!] === 'NONE') { continue; }

      const temp = unionListToAbc(targetEnum, this.testVectorOfUnion.bind(this), targetEnumIndex);
      if(temp === null) { continue; }
      ret.push(temp.unpack());
    }
    return ret;
  })()
  );
}


unpackTo(_o: DT): void {
  _o.testUnionType = this.testUnionType();
  _o.testUnion = (() => {
      const temp = unionToAbc(this.testUnionType(), this.testUnion.bind(this));
      if(temp === null) { return null; }
      return temp.unpack()
  })();
  _o.testVectorOfUnionType = this.bb!.createScalarList<ABC>(this.testVectorOfUnionType.bind(this), this.testVectorOfUnionTypeLength());
  _o.testVectorOfUnion = (() => {
    const ret: (AT|BT|CT)[] = [];
    for(let targetEnumIndex = 0; targetEnumIndex < this.testVectorOfUnionTypeLength(); ++targetEnumIndex) {
      const targetEnum = this.testVectorOfUnionType(targetEnumIndex);
      if(targetEnum === null || ABC[targetEnum!] === 'NONE') { continue; }

      const temp = unionListToAbc(targetEnum, this.testVectorOfUnion.bind(this), targetEnumIndex);
      if(temp === null) { continue; }
      ret.push(temp.unpack());
    }
    return ret;
  })();
}
}

export class DT implements flatbuffers.IGeneratedObject {
constructor(
  public testUnionType: ABC = ABC.NONE,
  public testUnion: AT|BT|CT|null = null,
  public testVectorOfUnionType: (ABC)[] = [],
  public testVectorOfUnion: (AT|BT|CT)[] = []
){}


pack(builder:flatbuffers.Builder): flatbuffers.Offset {
  const testUnion = builder.createObjectOffset(this.testUnion);
  const testVectorOfUnionType = D.createTestVectorOfUnionTypeVector(builder, this.testVectorOfUnionType);
  const testVectorOfUnion = D.createTestVectorOfUnionVector(builder, builder.createObjectOffsetList(this.testVectorOfUnion));

  return D.createD(builder,
    this.testUnionType,
    testUnion,
    testVectorOfUnionType,
    testVectorOfUnion
  );
}
}
