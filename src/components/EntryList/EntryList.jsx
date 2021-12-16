import Entry from '../Entry/Entry';
import { useEntries } from '../../context/EntryContext';

export default function EntryList() {
  const { entries } = useEntries();

  return (
    <div>
      <ul>
        {entries.map((entry) => {
          return (
            <li key={`${entry.name}-${entry.message}`}>
              <Entry entry={entry} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
