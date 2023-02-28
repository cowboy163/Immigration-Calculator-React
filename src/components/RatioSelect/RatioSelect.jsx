/*
 * interface options: Array<string>
 *
 * interface details: Array<string>
 *
 * interface content {
 *      description?: () => ReactNode,
 *      details?: details
 *      group: string,
 *      options: options
 * }
 */

const RatioSelect = ({content}) => {
    return (
        <div>
            {
                content?.description && content.description()
            }
            {
                content?.details && content.details.map((item, index) =>
                    <p className="details" key={index}>{item}</p>
                )
            }
            {
                content.options.map((item, index) =>
                    <label key={index}>
                        <input type="radio" name={content.group}/>
                        <span>{item}</span>
                    </label>
                )
            }

        </div>

    )
}
export default RatioSelect