import Dropdown from '@/components/atom/Dropdown';
import React from 'react';
import { View } from 'react-native';
import PanelLayout from './layout';

interface FormPanelProps {
  visible: boolean;
  setVisible: (visible: boolean) => void;
}

const AppointmentPanel = ({ visible, setVisible }: FormPanelProps) => {

  return (
    <PanelLayout
      visible={visible}
      setVisible={setVisible}
      title="New Appointment"
    >
      <View>

        <View>
          <Dropdown
            placeholder='Select Appointment Type'
            options={[
              { label: 'Service Appointment', value: 'service' },
              { label: 'Sales Appointment', value: 'sales' },
              { label: 'Test Drive', value: 'test_drive' },
            ]}
            onSelect={(option) => console.log('Selected:', option)}
            selectedOption={{ label: 'Service Appointment', value: 'service' }}
          />
        </View>

        {/* <View>
          <Text>Schedule </Text>
          <Icon name='send-outline' size={25} />
        </View> */}

      </View>
    </PanelLayout>
  )
}

export default AppointmentPanel