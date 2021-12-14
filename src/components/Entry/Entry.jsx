export default function Entry({ entry: {name, message}}) {
    <div>
        <h2>-{name}</h2>
        <p>
            {message}
        </p>
    </div>
}