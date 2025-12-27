import React, { ReactNode } from "react";
import { RigidBodyAutoCollider } from "../types.js";
export interface MeshColliderProps {
    children: ReactNode;
    type: RigidBodyAutoCollider;
}
/**
 * A mesh collider is a collider that is automatically generated from the geometry of the children.
 * @category Colliders
 */
export declare const MeshCollider: React.MemoExoticComponent<(props: MeshColliderProps) => import("react/jsx-runtime").JSX.Element>;
