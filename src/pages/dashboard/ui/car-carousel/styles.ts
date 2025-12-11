import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
    color: '#1C1C1E',
  },
  navigation: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  navButton: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#F2F2F7',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 4,
  },
  disabled: {
    opacity: 0.5,
  },
  dots: {
    flexDirection: 'row',
    marginHorizontal: 8,
  },
  dot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: '#C7C7CC',
    marginHorizontal: 2,
  },
  activeDot: {
    backgroundColor: '#007AFF',
  },
  carouselContainer: {
    height: 160,
    overflow: 'hidden',
  },
  scrollContent: {
    // Empty for proper paging
  },
  carCard: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  carCardContent: {
    width: '100%',
    paddingHorizontal: 20,
  },
  carName: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1C1C1E',
    textAlign: 'center',
    marginBottom: 16,
  },
  metricsGrid: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  metricCard: {
    flex: 1,
    marginHorizontal: 4,
  },
  emptyContainer: {
    marginHorizontal: 20,
    padding: 40,
    alignItems: 'center',
  },
  emptyText: {
    fontSize: 16,
    color: '#8E8E93',
    textAlign: 'center',
  },
})
