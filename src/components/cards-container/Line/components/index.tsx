import { TooltipProps } from 'recharts';

const CustomTooltipContent = (props: TooltipProps<string, string>) => {
  if (!props.active || !props.payload || !props.payload.length) {
    return null;
  }

  const newPayload = props.payload.map(entry => {
    return {
      ...entry,
      value: entry.value,
    };
  });

  return (
    <div
      className="custom-tooltip"
      style={{
        backgroundColor: '#000',
        border: '1px solid #FFF',
        padding: '10px',
      }}
    >
      {newPayload.map((entry, index) => (
        <div key={`item-${index}`} style={{ color: (entry as any).stroke }}>
          {entry.name}: {entry.value}
        </div>
      ))}
    </div>
  );
};

export { CustomTooltipContent };
