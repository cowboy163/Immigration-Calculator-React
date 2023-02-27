/*
 * interface options: Array<string>
 *
 * interface content {
 *      description?: () => ReactNode,
 *      details: string?,
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
                content?.details && <p className="details">{content.details}</p>
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