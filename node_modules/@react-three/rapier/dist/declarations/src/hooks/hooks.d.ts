import React, { MutableRefObject } from "react";
import { RapierContext, WorldStepCallback } from "../components/Physics.js";
import { Object3D } from "three";
import { ColliderProps, RigidBodyProps } from "../index.js";
/**
 * Exposes the Rapier context, and world
 * @category Hooks
 */
export declare const useRapier: () => RapierContext;
/**
 * Registers a callback to be called before the physics step
 * @category Hooks
 */
export declare const useBeforePhysicsStep: (callback: WorldStepCallback) => void;
/**
 * Registers a callback to be called after the physics step
 * @category Hooks
 */
export declare const useAfterPhysicsStep: (callback: WorldStepCallback) => void;
/**
 * @internal
 */
export declare const useChildColliderProps: <O extends Object3D<import("three").Object3DEventMap>>(ref: React.MutableRefObject<O | null | undefined>, options: RigidBodyProps, ignoreMeshColliders?: boolean) => ColliderProps[];
