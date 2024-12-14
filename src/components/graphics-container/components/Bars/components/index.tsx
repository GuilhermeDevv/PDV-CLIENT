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
      value: new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
      }).format(entry.value as unknown as number),
    };
  });

  console.log(newPayload, 'newpayload');

  return (
    <div
      style={{ position: 'relative', display: 'inline-block', left: '-40px' }}
    >
      <div
        className="custom-tooltip"
        style={{
          fontSize: '10px',
          backgroundColor: theme.background,
          boxShadow: `1px 6px 7px 0px ${theme.shadow}`,
          borderRadius: '6px',
          border: '1px solid #FFF',
          padding: '10px',
        }}
      >
        {newPayload.map((entry, index) => (
          <div
            key={`item-${index}`}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '2px',
            }}
          >
            {/* bolinha com sua cor */}
            <svg
              width="10"
              height="10"
              style={{
                display: 'inline-block',
                marginRight: '5px',
              }}
            >
              <circle cx="5" cy="5" r="5" fill={(entry as any).fill}></circle>
            </svg>
            {entry.name}:{' '}
            <span
              style={{
                color: (entry as any).fill,
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
