import { TooltipProps } from 'recharts';
import { useTheme } from 'styled-components';

const CustomTooltipContent = (props: TooltipProps<string, string>) => {
  const theme = useTheme();
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
    <div>
      <div
        className="custom-tooltip"
        style={{
          backgroundColor: theme.background,
          boxShadow: `1px 6px 7px 0px ${theme.shadow}`,
          borderRadius: '6px',
          border: '1px solid #FFF',
          padding: '10px',
          fontSize: '10px',
        }}
      >
        {newPayload.map((entry, index) => (
          <div key={`item-${index}`}>
            {/* linha para simular o elemento */}
            <svg
              width="10"
              height="10"
              style={{ display: 'inline-block', marginRight: '5px' }}
            >
              <line
                x1="0"
                y1="0"
                x2="10"
                y2="10"
                stroke={(entry as any).stroke}
                strokeWidth="1"
              />
            </svg>
            {entry.name}:{' '}
            <span
              style={{
                fontWeight: 'bold',
                fontSize: '12px',
              }}
            >
              {entry.value}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export { CustomTooltipContent };
