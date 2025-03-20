def make_chocolate(small, big, goal):
    max_big_bars = min(big, goal // 5)
    remaining_weight = goal - (max_big_bars * 5)  # Остаток после использования больших плиток

    if remaining_weight <= small:  # Если маленьких плиток хватает на остаток
        return remaining_weight
    return -1