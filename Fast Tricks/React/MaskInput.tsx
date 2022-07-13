import { useState } from "react";

export function TesteMask() {

    function mask(value, pattern) {
        let i = 0;
        let lastReplacedIndex = -1;

        const v = value.toString().replace(/\W/g, '')

        const result = pattern.replace(/#/g,
            (_, j) => {
                if (i >= v.length) {
                    return '#';
                }
                lastReplacedIndex = j;
                return v[i++] || ''
            })

        return result.substring(0, lastReplacedIndex + 1)
    }

    const [fone, setFone] = useState('')

    return (
        <div>
            <input
                onChange={
                    (e) => setFone(
                        mask(e.currentTarget.value, "###.###.###-##")
                    )}
                value={fone}
            />
        </div>
    )
}