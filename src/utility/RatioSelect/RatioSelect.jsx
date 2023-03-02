/*
 *  interface item {
 *      text: string
 *      value: string
 *  }
 *
 * type options: Array<item>
 *
 * type details: Array<string>
 *
 * interface content {
 *      description?: () => ReactNode,
 *      details?: details
 *      group: string,
 *      options: options
 * }
 */

const RatioSelect = ({content, onChange, selected}) => {
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
                content?.options && content.options.map((item, index) =>
                    <label key={index}
                    >
                        <input type="radio"
                               name={content.group}
                               value={item.value}
                               onChange={onChange}
                               checked={item.value === selected}
                        />
                        <span>{item.text}</span>
                    </label>
                )
            }

        </div>

    )
}
export default RatioSelect