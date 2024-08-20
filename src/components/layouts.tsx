import { ReactNode } from "react";

import cstyle from "styles/common.module.scss";

import { classes } from "src/helpers";

import { Header } from "./partials"


export function StandardLayout(args: {
    children: ReactNode,
}) {
    return (
        <main className={classes([cstyle.main])}>
            <Header></Header>
            {args.children}
        </main>
    );
}
