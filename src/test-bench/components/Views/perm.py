def permutations(array):
    if len(array) == 0:
        return [[]]

    permutations_without_first = permutations(array[1:])
    permutations = []
    for permutation in permutations_without_first:
        for i in range(len(permutation) + 1):
            permutations.append(permutation[:i] + [array[0]] + permutation[i:])

    return permutations
