/*
 *  interface item {
 *      text: string
 *      value: string
 *      group: string,
 *  }
 *
 * type options: Array<item>
 *
 * type details: Array<string>
 *
 * interface content {
 *      description?: () => ReactNode,
 *      details?: details
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
                               name={item.group}
                               value={item.value}
                               onChange={onChange}
                               checked={item.value === selected}
                               index={index}
                        />
                        <span>{item.text}</span>
                    </label>
                )
            }

        </div>

    )
}
export default RatioSelect