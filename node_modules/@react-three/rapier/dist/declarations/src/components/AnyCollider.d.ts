import { Collider } from "@dimforge/rapier3d-compat";
import React, { ReactNode, Ref } from "react";
import { BallArgs, CapsuleArgs, ColliderOptions, ConeArgs, ConvexHullArgs, CuboidArgs, CylinderArgs, HeightfieldArgs, RoundConeArgs, RoundCuboidArgs, RoundCylinderArgs, TrimeshArgs } from "../types.js";
export interface ColliderProps extends ColliderOptions<any> {
    children?: ReactNode;
    ref?: Ref<Collider>;
}
/**
 * A collider is a shape that can be attached to a rigid body to define its physical properties.
 * @internal
 */
export declare const AnyCollider: React.MemoExoticComponent<(props: ColliderProps) => import("react/jsx-runtime").JSX.Element>;
export type ColliderOptionsRequiredArgs<T extends unknown[]> = Omit<ColliderOptions<T>, "args"> & {
    args: T;
    children?: ReactNode;
};
export type CuboidColliderProps = ColliderOptionsRequiredArgs<CuboidArgs>;
/**
 * A cuboid collider shape
 * @category Colliders
 */
export declare const CuboidCollider: React.ForwardRefExoticComponent<Omit<ColliderOptions<CuboidArgs>, "args"> & {
    args: CuboidArgs;
    children?: ReactNode;
} & React.RefAttributes<Collider>>;
export type RoundCuboidColliderProps = ColliderOptionsRequiredArgs<RoundCuboidArgs>;
/**
 * A round cuboid collider shape
 * @category Colliders
 */
export declare const RoundCuboidCollider: React.ForwardRefExoticComponent<Omit<ColliderOptions<RoundCuboidArgs>, "args"> & {
    args: RoundCuboidArgs;
    children?: ReactNode;
} & React.RefAttributes<Collider>>;
export type BallColliderProps = ColliderOptionsRequiredArgs<BallArgs>;
/**
 * A ball collider shape
 * @category Colliders
 */
export declare const BallCollider: React.ForwardRefExoticComponent<Omit<ColliderOptions<BallArgs>, "args"> & {
    args: BallArgs;
    children?: ReactNode;
} & React.RefAttributes<Collider>>;
export type CapsuleColliderProps = ColliderOptionsRequiredArgs<CapsuleArgs>;
/**
 * A capsule collider shape
 * @category Colliders
 */
export declare const CapsuleCollider: React.ForwardRefExoticComponent<Omit<ColliderOptions<CapsuleArgs>, "args"> & {
    args: CapsuleArgs;
    children?: ReactNode;
} & React.RefAttributes<Collider>>;
export type HeightfieldColliderProps = ColliderOptionsRequiredArgs<HeightfieldArgs>;
/**
 * A heightfield collider shape
 * @category Colliders
 */
export declare const HeightfieldCollider: React.ForwardRefExoticComponent<Omit<ColliderOptions<HeightfieldArgs>, "args"> & {
    args: HeightfieldArgs;
    children?: ReactNode;
} & React.RefAttributes<Collider>>;
export type TrimeshColliderProps = ColliderOptionsRequiredArgs<TrimeshArgs>;
/**
 * A trimesh collider shape
 * @category Colliders
 */
export declare const TrimeshCollider: React.ForwardRefExoticComponent<Omit<ColliderOptions<TrimeshArgs>, "args"> & {
    args: TrimeshArgs;
    children?: ReactNode;
} & React.RefAttributes<Collider>>;
export type ConeColliderProps = ColliderOptionsRequiredArgs<ConeArgs>;
/**
 * A cone collider shape
 * @category Colliders
 */
export declare const ConeCollider: React.ForwardRefExoticComponent<Omit<ColliderOptions<ConeArgs>, "args"> & {
    args: ConeArgs;
    children?: ReactNode;
} & React.RefAttributes<Collider>>;
export type RoundConeColliderProps = ColliderOptionsRequiredArgs<RoundConeArgs>;
/**
 * A round cylinder collider shape
 * @category Colliders
 */
export declare const RoundConeCollider: React.ForwardRefExoticComponent<Omit<ColliderOptions<RoundConeArgs>, "args"> & {
    args: RoundConeArgs;
    children?: ReactNode;
} & React.RefAttributes<Collider>>;
export type CylinderColliderProps = ColliderOptionsRequiredArgs<CylinderArgs>;
/**
 * A cylinder collider shape
 * @category Colliders
 */
export declare const CylinderCollider: React.ForwardRefExoticComponent<Omit<ColliderOptions<CylinderArgs>, "args"> & {
    args: CylinderArgs;
    children?: ReactNode;
} & React.RefAttributes<Collider>>;
export type RoundCylinderColliderProps = ColliderOptionsRequiredArgs<RoundCylinderArgs>;
/**
 * A round cylinder collider shape
 * @category Colliders
 */
export declare const RoundCylinderCollider: React.ForwardRefExoticComponent<Omit<ColliderOptions<RoundConeArgs>, "args"> & {
    args: RoundConeArgs;
    children?: ReactNode;
} & React.RefAttributes<Collider>>;
export type ConvexHullColliderProps = ColliderOptionsRequiredArgs<ConvexHullArgs>;
/**
 * A convex hull collider shape
 * @category Colliders
 */
export declare const ConvexHullCollider: React.ForwardRefExoticComponent<Omit<ColliderOptions<ConvexHullArgs>, "args"> & {
    args: ConvexHullArgs;
    children?: ReactNode;
} & React.RefAttributes<Collider>>;
