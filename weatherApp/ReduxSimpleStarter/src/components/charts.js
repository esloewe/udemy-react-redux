import React from "react";
import { Sparklines, SparklinesLine } from "react-sparklines";

export default props => {
    return (
        <div>
            <Sparklines data={props.data} height={120} width={120}>
                <SparklinesLine color={props.color}> </SparklinesLine>
            </Sparklines>
        </div>
    );
};
