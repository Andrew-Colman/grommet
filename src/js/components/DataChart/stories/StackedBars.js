import React from 'react';
import { storiesOf } from '@storybook/react';

import { Box, DataChart, Grommet, Text } from 'grommet';
import { grommet } from 'grommet/themes';

const data = [];
for (let i = 0; i < 7; i += 1) {
  data.push({
    date: `2020-07-${((i % 31) + 1).toString().padStart(2, 0)}`,
    usage: Math.floor(Math.abs(Math.sin(i / 2.0) * 100)),
    bonus: Math.floor(Math.abs(Math.cos(i / 2.0) * 100)),
  });
}

const Example = () => (
  <Grommet theme={grommet}>
    <Box align="center" justify="start" pad="large">
      <DataChart
        data={data}
        property={[
          {
            property: 'date',
            render: date => (
              <Text margin={{ horizontal: 'xsmall' }}>
                {new Date(date).toLocaleDateString('en-US', {
                  month: 'numeric',
                  day: 'numeric',
                })}
              </Text>
            ),
          },
          'usage',
          'bonus',
        ]}
        chart={[
          {
            property: [
              { property: 'usage', color: 'graph-1' },
              { property: 'bonus', color: 'graph-2' },
            ],
            type: 'bar',
          },
        ]}
        axis={{ x: 'date' }}
        guide={{ y: true }}
        gap="medium"
      />
    </Box>
  </Grommet>
);

storiesOf('DataChart', module).add('Stacked bars', () => <Example />);
