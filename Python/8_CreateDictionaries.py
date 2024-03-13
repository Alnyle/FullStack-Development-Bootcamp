
L = [['a', 1], ['b', 4], ['a', 2]]

dic = {}

for i in range(len(L)):

    # check if the key the is exist in dictionary
    if L[i][0] in dic:
        dic[L[i][0]].append(L[i][1])

    else:
        dic[L[i][0]] = []
        dic[L[i][0]].append(L[i][1])

print(dic)