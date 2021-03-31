import React from "react";
import {Link} from "../link";
import {Image} from "../image";

function SampleLink () {
    return (
        <div>
            <h2>Link</h2>
            <Link marginRight={10} title="Click here...">
                Click here...
            </Link>

            <Link href="https://artlab.mn/" target="_blank" fontSize="1em" title="Artlab external link...">
                Go to Artlab...
            </Link>

            <Link marginLeft={10} title="Image click here...">
                <Image src="https://cdn.artlab.mn/rsc/idr/photos/stromboli.jpg" circle width={50} height={50}/>
            </Link>
        </div>
    )
};

export default SampleLink;