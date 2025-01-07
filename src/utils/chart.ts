export const handleGetChartConfig = (
    data: number[],
    bgColors: string[],
    page: string
  ) => {
    return {
      datasets: [
        {
          data: data,
          backgroundColor: bgColors,
          borderColor: bgColors,
          borderWidth: 1,
          radius: page === 'budgets' ? '75%' : '100%',
          cutout: '50%',
        },
        {
          data: data,
          backgroundColor: "rgba(210, 215, 211, 0.35)",
          borderWidth: 1,
          radius: page === 'budgets' ? '75%' : '100%',
          cutout: '60%',
        },
      ],
    }
}