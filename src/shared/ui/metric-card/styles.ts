import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingVertical: 8,
    minWidth: 80,
  },
  label: {
    fontSize: 12,
    color: '#8E8E93',
    marginBottom: 4,
    textAlign: 'center',
  },
  valueContainer: {
    flexDirection: 'row',
    alignItems: 'baseline',
  },
  value: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1C1C1E',
  },
  unit: {
    fontSize: 14,
    color: '#8E8E93',
    marginLeft: 2,
  },
  trend: {
    fontSize: 14,
    marginLeft: 4,
  },
  up: {
    color: '#34C759',
  },
  down: {
    color: '#FF3B30',
  },
  neutral: {
    color: '#8E8E93',
  },
})
