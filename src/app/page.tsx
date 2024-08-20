import cstyle from "styles/common.module.scss";
import style from "./page.module.scss";

import { classes } from "@/helpers";
import { StandardLayout } from "@/components/layouts";
import { LinkButton, BioLinkInfo } from "@/components/partials";

import Image from "next/image";

import portrait from "public/static/images/portrait.png";

import { biolinks } from "@/links";


function BioLinkBoard(args: BioLinkInfo[]) {
    // TODO: use biolinks instead of hardcoded buttons
    var key_iter = 0;
    return (
        <div className="flex flex-row justify-center">
            {args.map((link) => {
                const ret = (<LinkButton key={key_iter} target_title={link.target_title} target_url={link.target_url} image_src={link.image_src} />)
                key_iter += 1;
                return ret;
            })}
        </div>
    );
}

export default function Page() {
    return (
        <StandardLayout>
            <article className={classes([style.main_content, cstyle.main_content, cstyle.led_font])}>
                <section className={style.sec_profile}>
                    <div className={classes([style.profile_ctr, "flex flex-col"])}>
                        <div className={style.portrait}>
                            <Image src={portrait} fill={true} alt="Avatar" priority={true}/>
                        </div>
                        <div className={style.portrait_below}>
                            <h1>Wanlace Connor Yates</h1>
                            {BioLinkBoard(biolinks)}
                        </div>
                    </div>
                </section>
                <section className={style.sec_bio_blurb}>
                    <div className={style.bio_ctr}>
                    </div>
                </section>
            </article>
        </StandardLayout>
    );
}
