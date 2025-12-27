import React, { ReactNode } from "react";
import { RapierRigidBody } from "../types.js";
import { RigidBodyProps } from "./RigidBody.js";
export type InstancedRigidBodyProps = RigidBodyProps & {
    key: string | number;
};
export interface InstancedRigidBodiesProps extends Omit<RigidBodyProps, "ref"> {
    instances: InstancedRigidBodyProps[];
    colliderNodes?: ReactNode[];
    children: ReactNode;
    ref?: React.Ref<(RapierRigidBody | null)[] | null>;
}
export declare const InstancedRigidBodies: React.MemoExoticComponent<({ ref, ...props }: InstancedRigidBodiesProps) => import("react/jsx-runtime").JSX.Element>;
