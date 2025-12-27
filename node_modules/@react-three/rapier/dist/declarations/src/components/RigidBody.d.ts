import React, { ReactNode, Ref, RefObject } from "react";
import { Object3D } from "three";
import { RapierRigidBody, RigidBodyOptions } from "../types.js";
type RigidBodyContextType = {
    ref: RefObject<Object3D>;
    getRigidBody: () => RapierRigidBody;
    options: RigidBodyOptions;
};
export declare const RigidBodyContext: React.Context<RigidBodyContextType>;
export declare const useRigidBodyContext: () => RigidBodyContextType;
export interface RigidBodyProps extends RigidBodyOptions {
    children?: ReactNode;
    ref?: Ref<RapierRigidBody>;
}
/**
 * A rigid body is a physical object that can be simulated by the physics engine.
 * @category Components
 */
export declare const RigidBody: React.MemoExoticComponent<(props: RigidBodyProps) => import("react/jsx-runtime").JSX.Element>;
export {};
