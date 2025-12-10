import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 12,
    marginBottom: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
  },
  critical: {
    borderLeftWidth: 4,
    borderLeftColor: '#FF3B30',
  },
  warning: {
    borderLeftWidth: 4,
    borderLeftColor: '#FF9500',
  },
  info: {
    borderLeftWidth: 4,
    borderLeftColor: '#007AFF',
  },
  iconContainer: {
    marginRight: 12,
  },
  content: {
    flex: 1,
  },
  title: {
    fontSize: 15,
    fontWeight: '600',
    color: '#1C1C1E',
    marginBottom: 2,
  },
  message: {
    fontSize: 13,
    color: '#8E8E93',
    lineHeight: 18,
  },
  arrowContainer: {
    marginLeft: 8,
  },
})
