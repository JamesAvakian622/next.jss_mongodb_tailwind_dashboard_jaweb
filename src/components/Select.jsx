export default function Select({ options, ...props }) {
    return (
        <>  
        <select {...props}>
        {options.map((option, index) => (
            <option key={index} value={option.value}>
            {option.label}
            </option>
        ))}
        </select>

 </>
    );
    }