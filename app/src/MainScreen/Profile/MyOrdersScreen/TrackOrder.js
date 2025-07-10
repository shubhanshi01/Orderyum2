import  {ScrollView, StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';

const steps = [
  { label: 'Order Placed', done: true },
  { label: 'Preparing', done: true },
  { label: 'On the way', done: true },
  { label: 'Arriving', done: false },
  { label: 'Delivered', done: false },
];

const TrackOrder = () => {
    return (
        <View style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollView}>
                <Text style={styles.header}>Track Your Order</Text>
                <Image source={require('../../../Component/images/samosa.jpg')} style={styles.orderImage} />
                <View style={styles.statusBox}>
                  <Text style={styles.statusLabel}>Order ID:</Text>
                  <Text style={styles.statusValue}>ORD-123456</Text>
                </View>
                <View style={styles.statusBox}>
                  <Text style={styles.statusLabel}>Estimated Delivery:</Text>
                  <Text style={styles.statusValue}>30 minutes</Text>
                </View>
                <View style={styles.statusBox}>
                  <Text style={styles.statusLabel}>Current Status:</Text>
                  <Text style={[styles.statusValue, styles.statusActive]}>On the way</Text>
                </View>
                <View style={styles.trackingContainer}>
                  {steps.map((step, idx) => (
                    <React.Fragment key={step.label}>
                      <View style={[styles.circle, step.done && styles.circleActive]}>
                        <View style={[styles.innerCircle, step.done && styles.innerCircleActive]} />
                      </View>
                      {idx < steps.length - 1 && (
                        <View style={[styles.line, steps[idx + 1].done && styles.lineActive]} />
                      )}
                      <Text style={[styles.stepLabel, step.done && styles.stepLabelActive]}></Text>
                    </React.Fragment>
                  ))}
                </View>
                <Text style={styles.progressText}>Current: On the way</Text>
            </ScrollView>
        </View>
    )
}

export default TrackOrder;

const CIRCLE_SIZE = 24;
const LINE_WIDTH = 40;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FEF3E2',
    paddingTop: 40,
  },
  scrollView: {
    paddingHorizontal: 16,
    paddingBottom: 20,
    alignItems: 'center',
  },
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#FA812F',
    textAlign: 'center',
    marginBottom: 20,
    letterSpacing: 1,
  },
  orderImage: {
    width: 180,
    height: 120,
    borderRadius: 16,
    marginBottom: 24,
    resizeMode: 'cover',
  },
  statusBox: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    width: '100%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 4,
    elevation: 2,
  },
  statusLabel: {
    fontWeight: 'bold',
    color: '#FA812F',
    fontSize: 16,
    width: 150,
  },
  statusValue: {
    fontSize: 16,
    color: '#333',
  },
  statusActive: {
    color: '#008CBA',
    fontWeight: 'bold',
  },
  trackingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 32,
    width: '100%',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  circle: {
    width: CIRCLE_SIZE,
    height: CIRCLE_SIZE,
    borderRadius: CIRCLE_SIZE / 2,
    borderWidth: 2,
    borderColor: '#FFE5C2',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 2,
    zIndex: 2,
  },
  circleActive: {
    borderColor: '#FA812F',
    backgroundColor: '#FA812F22',
  },
  innerCircle: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#FFE5C2',
  },
  innerCircleActive: {
    backgroundColor: '#FA812F',
  },
  line: {
    width: LINE_WIDTH,
    height: 4,
    backgroundColor: '#FFE5C2',
    marginHorizontal: 2,
    zIndex: 1,
    marginTop: -CIRCLE_SIZE / 2 + 2,
  },
  lineActive: {
    backgroundColor: '#FA812F',
  },
  stepLabel: {
    position: 'absolute',
    top: CIRCLE_SIZE + 8,
    left: -CIRCLE_SIZE / 2,
    width: CIRCLE_SIZE + LINE_WIDTH,
    textAlign: 'center',
    fontSize: 12,
    color: '#888',
  },
  stepLabelActive: {
    color: '#FA812F',
    fontWeight: 'bold',
  },
  progressText: {
    fontSize: 15,
    color: '#FA812F',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
});