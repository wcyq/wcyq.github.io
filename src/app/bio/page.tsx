import cstyle from "styles/common.module.scss";
import style from "./page.module.scss";

import { classes } from "src/helpers";
import { StandardLayout } from "src/components/layouts";

import { StaticImageData } from 'next/image';
import Image from 'next/image';


export default function Page() {
    return (
        <StandardLayout>
            <article className={classes([style.main_content, cstyle.main_content])}>
                <section id="title" className={classes([style.title, "flex", "flex-row"])}>
                    <div className={classes([style.left_ss, "grow"])}>
                        <p>Content</p>
                    </div>
                    <div className={classes([style.right_ss, "flex-none"])}>
                        <div className={classes([style.portrait_ctr])}>
                        </div>
                        <div className={classes([style.caption])}>
                            <h1>W Connor Yates</h1>
                            <h2>Software Engineer</h2>
                        </div>
                    </div>
                </section>
                <section id="info" className={classes([style.info, "flex"])}>
                </section>
            </article>
        </StandardLayout>
    );
}
